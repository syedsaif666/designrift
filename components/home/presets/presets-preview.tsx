import React, { useState } from 'react';
import { Search, Archive, Trash2, Mail, MoreVertical, Reply, RotateCcw, MoveRight, ChevronDown, Send, Inbox, FileText, Megaphone, ShoppingCart, Tag, MessageSquare, Bell, AlertCircle, CheckCircle, Info, AlertTriangle, X, Plus, Star, Clock, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Email {
    id: number;
    sender: string;
    subject: string;
    preview: string;
    timestamp: string;
    tags: string[];
    isUnread?: boolean;
    priority?: 'normal' | 'high' | 'urgent';
}

interface Toast {
    id: number;
    type: 'success' | 'warning' | 'alert' | 'info';
    message: string;
}

const emailData: Email[] = [
    {
        id: 1,
        sender: 'William Smith',
        subject: 'Meeting Tomorrow',
        preview: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's...",
        timestamp: 'about 2 years ago',
        tags: ['meeting', 'work', 'important'],
        isUnread: true,
        priority: 'high'
    },
    {
        id: 2,
        sender: 'Alice Smith',
        subject: 'Re: Project Update',
        preview: "Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic...",
        timestamp: 'about 2 years ago',
        tags: ['work', 'important'],
        priority: 'normal'
    },
    {
        id: 3,
        sender: 'Bob Johnson',
        subject: 'Weekend Plans',
        preview: "Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun. If you're...",
        timestamp: 'over 2 years ago',
        tags: ['personal'],
        priority: 'normal'
    },
    {
        id: 4,
        sender: 'Emily Davis',
        subject: 'Re: Question about Budget',
        preview: 'Regarding the budget concerns you raised...',
        timestamp: 'over 2 years ago',
        tags: ['finance'],
        isUnread: true,
        priority: 'urgent'
    }
];

type SidebarItem = 
    | {
        icon: LucideIcon;
        label: string;
        count: number | null;
        active?: boolean;
    }
    | { separator: true };

const sidebarItems: SidebarItem[] = [
    { icon: Inbox, label: 'Inbox', count: 128, active: true },
    { icon: FileText, label: 'Drafts', count: 9 },
    { icon: Send, label: 'Sent', count: null },
    { icon: Star, label: 'Starred', count: 15 },
    { icon: Clock, label: 'Snoozed', count: 3 },
    { icon: Trash2, label: 'Trash', count: null },
    { separator: true },
    { icon: MessageSquare, label: 'Social', count: 972 },
    { icon: Bell, label: 'Updates', count: 342 },
    { icon: Users, label: 'Forums', count: 128 },
    { icon: ShoppingCart, label: 'Shopping', count: 8 },
    { icon: Tag, label: 'Promotions', count: 21 }
];

const PresetsPreview: React.FC = () => {
    const [selectedEmail, setSelectedEmail] = useState<Email>(emailData[0]);
    const [activeTab, setActiveTab] = useState<'all' | 'unread'>('all');
    const [showDialog, setShowDialog] = useState(false);
    const [toasts, setToasts] = useState<Toast[]>([]);
    const [nextToastId, setNextToastId] = useState(1);

    const addToast = (type: Toast['type'], message: string) => {
        const newToast = { id: nextToastId, type, message };
        setToasts(prev => [...prev, newToast]);
        setNextToastId(prev => prev + 1);
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== newToast.id));
        }, 4000);
    };

    return (
        <div className="flex mx-auto max-h-[90vh] w-[85vw] bg-canvas-bg-subtle border border-canvas-border rounded-2xl mt-16 text-sm">
            {/* Toast Container */}
            <div className="fixed top-4 right-4 z-50 space-y-2">
                {toasts.map(toast => (
                    <div
                        key={toast.id}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg min-w-80 animate-slide-in ${
                            toast.type === 'success' ? 'bg-success-bg border border-success-border' :
                            toast.type === 'warning' ? 'bg-warning-bg border border-warning-border' :
                            toast.type === 'alert' ? 'bg-alert-bg border border-alert-border' :
                            'bg-info-bg border border-info-border'
                        }`}
                    >
                        {toast.type === 'success' && <CheckCircle size={20} className="text-success-solid" />}
                        {toast.type === 'warning' && <AlertTriangle size={20} className="text-warning-solid" />}
                        {toast.type === 'alert' && <AlertCircle size={20} className="text-alert-solid" />}
                        {toast.type === 'info' && <Info size={20} className="text-info-solid" />}
                        <span className={`flex-1 ${
                            toast.type === 'success' ? 'text-success-text-contrast' :
                            toast.type === 'warning' ? 'text-warning-text-contrast' :
                            toast.type === 'alert' ? 'text-alert-text-contrast' :
                            'text-info-text-contrast'
                        }`}>{toast.message}</span>
                        <button onClick={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}>
                            <X size={16} className="text-canvas-text" />
                        </button>
                    </div>
                ))}
            </div>

            {/* Delete Confirmation Dialog */}
            {showDialog && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
                    <div className="rounded-xl shadow-2xl p-6 max-w-md w-full mx-4 bg-canvas-base">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-alert-bg-active">
                                <AlertCircle size={20} className="text-alert-solid" />
                            </div>
                            <h3 className="text-lg font-semibold text-canvas-text-contrast">Delete Email?</h3>
                        </div>
                        <p className="mb-6 text-canvas-text">
                            Are you sure you want to delete this email? This action cannot be undone.
                        </p>
                        <div className="flex gap-3 justify-end">
                            <button
                                onClick={() => setShowDialog(false)}
                                className="px-4 py-2 rounded-lg font-medium transition-colors bg-canvas-bg-hover text-canvas-text-contrast"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    setShowDialog(false);
                                    addToast('alert', 'Email deleted successfully');
                                }}
                                className="px-4 py-2 rounded-lg font-medium transition-colors bg-alert-solid text-alert-on-alert"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Sidebar */}
            <div className="w-80 flex flex-col border-r bg-canvas-base border-canvas-border rounded-l-2xl">
                {/* User Section */}
                <div className="p-4 border-b border-canvas-border">
                    <button className="flex items-center justify-between w-full px-3 py-2 rounded-lg bg-canvas-bg-active">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded flex items-center justify-center font-medium bg-primary-solid text-primary-on-primary">
                                A
                            </div>
                            <span className="font-medium text-canvas-text-contrast">Alicia Koch</span>
                        </div>
                        <ChevronDown size={16} className="text-canvas-text" />
                    </button>
                </div>

                {/* Compose Button */}
                <div className="p-4">
                    <button
                        className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg font-medium transition-colors bg-primary-solid text-primary-on-primary"
                    >
                        <Plus size={18} />
                        Compose
                    </button>
                </div>

                {/* Navigation */}
                <div className="flex-1 overflow-y-auto px-3 pb-3">
                    {sidebarItems.map((item, index) =>
                        'separator' in item ? (
                            <div key={index} className="my-3 h-px bg-canvas-line" />
                        ) : (
                            <button
                                key={index}
                                className={`flex items-center justify-between w-full px-3 py-2 rounded-lg mb-0.5 transition-colors ${
                                    item.active ? 'bg-primary-bg-active text-primary-text-contrast' : 'text-canvas-text-contrast'
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <item.icon size={18} />
                                    <span className="font-medium">{item.label}</span>
                                </div>
                                {item.count !== null && (
                                    <span className={`text-xs px-2 py-0.5 rounded ${
                                        item.active ? 'bg-primary-bg-hover text-primary-text' : 'bg-canvas-bg text-canvas-text-contrast'
                                    }`}>
                                        {item.count}
                                    </span>
                                )}
                            </button>
                        )
                    )}
                </div>
            </div>

            {/* Email List */}
            <div className="w-96 flex flex-col border-r bg-canvas-base border-canvas-border">
                {/* Header */}
                <div className="p-4 border-b border-canvas-border">
                    <h1 className="text-xl font-semibold mb-3 text-canvas-text-contrast">
                        Inbox
                    </h1>

                    {/* Tabs */}
                    <div className="flex gap-2 mb-3">
                        <button
                            onClick={() => setActiveTab('all')}
                            className={`px-4 py-1.5 rounded-md text-xs font-medium transition-colors ${
                                activeTab === 'all' ? 'bg-canvas-bg-active text-canvas-text-contrast' : 'text-canvas-text'
                            }`}
                        >
                            All mail
                        </button>
                        <button
                            onClick={() => setActiveTab('unread')}
                            className={`px-4 py-1.5 rounded-md text-xs font-medium transition-colors ${
                                activeTab === 'unread' ? 'bg-canvas-bg-active text-canvas-text-contrast' : 'text-canvas-text'
                            }`}
                        >
                            Unread
                        </button>
                    </div>

                    {/* Search */}
                    <div className="relative">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-canvas-text" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full pl-10 pr-4 py-2 rounded-lg border outline-none text-xs bg-canvas-bg border-canvas-border text-canvas-text-contrast"
                        />
                    </div>
                </div>

                {/* Email List */}
                <div className="flex-1 overflow-y-auto">
                    {emailData.map((email) => (
                        <div
                            key={email.id}
                            onClick={() => setSelectedEmail(email)}
                            className={`p-4 border-b cursor-pointer transition-colors border-canvas-border ${
                                selectedEmail.id === email.id ? 'bg-canvas-bg-active' : ''
                            }`}
                        >
                            <div className="flex items-start justify-between mb-1">
                                <div className="flex items-center gap-2">
                                    <h3 className="font-semibold text-canvas-text-contrast">
                                        {email.sender}
                                    </h3>
                                    {email.isUnread && (
                                        <div className="w-2 h-2 rounded-full bg-info-solid" />
                                    )}
                                    {email.priority === 'urgent' && (
                                        <span className="px-2 py-0.5 rounded text-xs font-medium bg-alert-bg text-alert-text">
                                            Urgent
                                        </span>
                                    )}
                                    {email.priority === 'high' && (
                                        <span className="px-2 py-0.5 rounded text-xs font-medium bg-warning-bg text-warning-text">
                                            High
                                        </span>
                                    )}
                                </div>
                                <span className="text-xs text-canvas-text">
                                    {email.timestamp}
                                </span>
                            </div>
                            <h4 className="font-medium mb-1 text-canvas-text-contrast">
                                {email.subject}
                            </h4>
                            <p className="text-sm mb-2 line-clamp-2 text-canvas-text-contrast">
                                {email.preview}
                            </p>
                            <div className="flex gap-2 flex-wrap">
                                {email.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className={`px-2 py-1 rounded text-xs font-medium ${
                                            tag === 'important' ? 'bg-secondary-bg text-secondary-text' :
                                            tag === 'finance' ? 'bg-success-bg text-success-text' :
                                            'bg-canvas-bg text-canvas-text'
                                        }`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Email Content */}
            <div className="flex-1 flex flex-col bg-canvas-base rounded-r-2xl">
                {/* Header Actions */}
                <div className="flex items-center justify-between p-4 border-b border-canvas-border">
                    <div className="flex items-center gap-2">
                        <button 
                            onClick={() => addToast('info', 'Email archived')}
                            className="p-2 rounded-lg transition-colors bg-canvas-bg"
                        >
                            <Archive size={18} className="text-canvas-text" />
                        </button>
                        <button 
                            onClick={() => addToast('success', 'Marked as read')}
                            className="p-2 rounded-lg transition-colors bg-canvas-bg"
                        >
                            <Mail size={18} className="text-canvas-text" />
                        </button>
                        <button 
                            onClick={() => setShowDialog(true)}
                            className="p-2 rounded-lg transition-colors bg-canvas-bg"
                        >
                            <Trash2 size={18} className="text-canvas-text" />
                        </button>
                        <button 
                            onClick={() => addToast('warning', 'Email moved to spam')}
                            className="p-2 rounded-lg transition-colors bg-canvas-bg"
                        >
                            <RotateCcw size={18} className="text-canvas-text" />
                        </button>
                    </div>
                    <div className="flex items-center gap-2">
                        <button 
                            className="px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 bg-primary-solid text-primary-on-primary"
                        >
                            <Reply size={16} />
                            Reply
                        </button>
                    </div>
                </div>

                {/* Email Content */}
                <div className="flex-1 overflow-y-auto p-6">
                    <div className="max-w-3xl">
                        {/* Priority Banner */}
                        {selectedEmail.priority === 'urgent' && (
                            <div className="mb-3 p-4 rounded-lg flex items-center gap-3 bg-alert-bg border border-alert-border">
                                <AlertCircle size={20} className="text-alert-solid" />
                                <span className="text-alert-text-contrast">This is an urgent message requiring immediate attention</span>
                            </div>
                        )}

                        {/* Email Header */}
                        <div className="flex items-start gap-4 mb-4">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center font-semibold bg-secondary-solid text-secondary-on-secondary">
                                {selectedEmail.sender.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                    <h2 className="text-lg font-semibold text-canvas-text-contrast">
                                        {selectedEmail.sender}
                                    </h2>
                                    <span className="text-xs text-canvas-text">
                                        Oct 22, 2023, 9:00:00 AM
                                    </span>
                                </div>
                                <h3 className="font-medium mb-1 text-canvas-text-contrast">
                                    {selectedEmail.subject}
                                </h3>
                                <p className="text-xs text-canvas-text">
                                    Reply-To: {selectedEmail.sender.toLowerCase().replace(' ', '')}@example.com
                                </p>
                            </div>
                        </div>

                        {/* Email Body */}
                        <div className="space-y-3 text-canvas-text-contrast">
                            <p>
                                Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and
                                have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's
                                success.
                            </p>
                            <p>
                                Please come prepared with any questions or insights you may have. Looking forward to our meeting!
                            </p>
                            <p>Best regards, {selectedEmail.sender.split(' ')[0]}</p>
                        </div>

                        {/* Info Box */}
                        <div className="mt-4 p-4 rounded-lg bg-info-bg border border-info-border">
                            <div className="flex items-center gap-2 mb-2">
                                <Info size={18} className="text-info-solid" />
                                <span className="font-medium text-info-text-contrast">Meeting Details</span>
                            </div>
                            <p className="text-sm text-info-text">
                                Scheduled for tomorrow at 10:00 AM. Conference Room B.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PresetsPreview;
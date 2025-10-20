import { ImageResponse } from '@vercel/og';

function sanitizeText(input: string, maxLen = 120) {
    // Basic sanitization: trim, collapse whitespace, and cap length
    const cleaned = input.replace(/\s+/g, ' ').trim();

    if (cleaned.length > maxLen) {
        return cleaned.slice(0, maxLen - 1) + '…';
    }

    return cleaned;
}

export function GET(request: Request) {
    try {
        const url = new URL(request.url);
        const rawTitle = url.searchParams.get('title') || 'designrift';
        const title = sanitizeText(rawTitle, 120);

        return new ImageResponse(
            (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        background: 'linear-gradient(135deg, #020617, #111827)'
                    }}>
                    <div
                        style={{
                            position: 'absolute',
                            width: '100%',
                            height: '1px',
                            background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent)',
                            top: '50%'
                        }}
                    />

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            padding: '48px 32px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            zIndex: 10
                        }}>
                        <h1
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                fontSize: '84px',
                                fontWeight: 700,
                                textAlign: 'center',
                                color: 'white',
                                letterSpacing: '-2px',
                                margin: 0,
                                padding: 0
                            }}>
                            {title}
                        </h1>
                    </div>

                    <div
                        style={{
                            position: 'absolute',
                            bottom: '40px',
                            width: '200px',
                            height: '2px',
                            background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent)'
                        }}
                    />
                </div>
            ),
            {
                width: 1200,
                height: 630
            }
        );
    } catch (err) {
        console.error('OG generation error:', err);

        return new Response('Failed to generate image', { status: 500 });
    }
}

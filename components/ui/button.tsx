//v3
// import { memo } from 'react';
import React from 'react';

import { Slot } from '@radix-ui/react-slot';

import { cva, type VariantProps } from 'class-variance-authority';

// Spinner component with smooth appearance animation
const Spinner = () => (
    <svg className='h-4 w-4 animate-spin' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
        <path
            className='opacity-75'
            fill='currentColor'
            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
    </svg>
);

const buttonVariants = cva(
    'items-center justify-center rounded-lg font-medium transition-colors duration-300 ease-out disabled:opacity-50 hover:cursor-pointer disabled:cursor-not-allowed leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 select-none',

    {
        variants: {
            color: {
                primary: '',
                neutral: '',
                secondary: '',
                outline: '',
                ghost: '',
                link: ''
            },
            variant: {
                solid: '',
                soft: '',
                surface: '',
                outline: '',
                ghost: '',
                destructive: 'bg-alert-solid text-alert-on-alert hover:bg-alert-solid-hover '
            },
            size: {
                sm: 'px-5 h-8 text-sm',
                default: 'px-6 h-9 text-base',
                lg: 'px-8 h-12 text-lg'
            },
            // Add a new isIcon variant
            isIcon: {
                true: '',
                false: ''
            },
            // Add a loading variant
            isLoading: {
                true: '',
                false: ''
            },
            fullWidth: {
                false: 'inline-flex w-fit', // default: shrink-to-fit
                true: 'flex w-full' // fill the container
            }
        },
        compoundVariants: [
            // Primary color variants
            {
                color: 'primary',
                variant: 'solid',
                class: 'bg-primary-solid text-primary-on-primary hover:bg-primary-solid-hover'
            },
            {
                color: 'primary',
                variant: 'soft',
                class: 'bg-primary-bg-hover text-primary-text hover:bg-primary-bg-active'
            },
            {
                color: 'primary',
                variant: 'surface',
                class: 'border border-primary-border bg-primary-bg text-primary-text-contrast hover:bg-primary-bg-hover hover:border-primary-border-hover'
            },
            {
                color: 'primary',
                variant: 'outline',
                class: 'border border-primary-border text-primary-text hover:border-primary-border-hover'
            },
            {
                color: 'primary',
                variant: 'ghost',
                class: 'bg-transparent text-primary-text hover:bg-primary-bg-hover'
            },
            {
                color: 'primary',
                variant: 'destructive',
                class: 'bg-alert-solid text-alert-on-alert hover:bg-alert-solid-hover'
            },
            // Neutral color variants
            {
                color: 'neutral',
                variant: 'solid',
                class: 'bg-canvas-text-contrast text-canvas-solid hover:bg-canvas-text-contrast/90'
            },
            {
                color: 'neutral',
                variant: 'soft',
                class: 'bg-canvas-bg-hover text-canvas-text hover:bg-canvas-bg-active'
            },
            {
                color: 'neutral',
                variant: 'surface',
                class: 'border border-canvas-border bg-canvas-bg text-canvas-text hover:bg-canvas-bg-hover hover:border-canvas-border-hover'
            },
            {
                color: 'neutral',
                variant: 'outline',
                class: 'border border-canvas-border text-canvas-text hover:border-canvas-border-hover'
            },
            {
                color: 'neutral',
                variant: 'ghost',
                class: 'bg-transparent text-canvas-text hover:bg-canvas-bg-hover'
            },
            {
                color: 'neutral',
                variant: 'destructive',
                class: 'bg-alert-solid text-alert-on-alert hover:bg-alert-solid-hover'
            },
            // Focus ring styles based on color
            {
                color: 'primary',
                class: 'focus-visible:ring-primary-solid'
            },
            {
                color: 'neutral',
                class: 'focus-visible:ring-canvas-solid'
            },

            // Icon button styles
            {
                isIcon: true,
                size: 'sm',
                class: '!px-0 !w-8 !max-w-8'
            },
            {
                isIcon: true,
                size: 'default',
                class: '!px-0 !w-10 !max-w-10'
            },
            {
                isIcon: true,
                size: 'lg',
                class: '!px-0 !w-14 !max-w-14'
            },
            // Loading state styles
            {
                isLoading: true,
                class: 'relative !cursor-wait'
            }
        ],
        defaultVariants: {
            color: 'primary',
            variant: 'solid',
            size: 'default',
            isIcon: false,
            isLoading: false,
            fullWidth: false
        }
    }
);

export interface ButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'color'>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    leadingIcon?: React.ReactElement;
    trailingIcon?: React.ReactElement;
    iconOnly?: boolean; // set for icon buttons
    isLoading?: boolean; // new loading state prop
    loadingText?: string; // optional loading text
    fullWidth?: boolean;
    name?: string; // button text content
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            color,
            variant,
            size,
            asChild = false,
            leadingIcon,
            trailingIcon,
            iconOnly = false,
            isLoading = false,
            loadingText,
            className,
            children,
            disabled,
            fullWidth = false,
            name,
            ...props
        },
        ref
    ) => {
        const Comp = asChild ? Slot : 'button';

        // If iconOnly is true, we only render the leadingIcon
        const icon = iconOnly ? leadingIcon : null;

        // Determine if button should be disabled (when loading or explicitly disabled)
        const isDisabled = isLoading || disabled;

        return (
            <Comp
                ref={ref}
                type='button'
                className={buttonVariants({
                    color,
                    variant,
                    size,
                    isIcon: iconOnly,
                    isLoading,
                    fullWidth,
                    className
                })}
                disabled={isDisabled}
                {...props}>
                {/* Loading State */}
                {isLoading && iconOnly && <Spinner />}

                {/* Loading State with Text */}
                {isLoading && !iconOnly && (
                    <>
                        <span className='mr-2'>
                            <Spinner />
                        </span>
                        {loadingText || name || children}
                    </>
                )}

                {/* Normal Icon Only */}
                {!isLoading && iconOnly && icon}

                {/* Normal Button with Text */}
                {!isLoading && !iconOnly && (
                    <>
                        {leadingIcon && <span className='mr-2'>{leadingIcon}</span>}
                        {name || children}
                        {trailingIcon && <span className='ml-2'>{trailingIcon}</span>}
                    </>
                )}
            </Comp>
        );
    }
);
Button.displayName = 'Button';

// export default Button;

const ButtonMemoized = React.memo(Button);
export { ButtonMemoized as Button, buttonVariants };

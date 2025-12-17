import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
interface IllustrativeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
export const IllustrativeCard = React.forwardRef<HTMLDivElement, IllustrativeCardProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          'border-2 border-foreground/10 shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out',
          'transform hover:-translate-y-1 hover:rotate-[-0.5deg]',
          'rounded-lg overflow-hidden',
          className
        )}
        {...props}
      >
        {children}
      </Card>
    );
  }
);
IllustrativeCard.displayName = 'IllustrativeCard';
export { CardContent as IllustrativeCardContent, CardDescription as IllustrativeCardDescription, CardFooter as IllustrativeCardFooter, CardHeader as IllustrativeCardHeader, CardTitle as IllustrativeCardTitle };
import { ConfettiButton } from "@/components/ui/confetti";

export function ConfettiButtonDemo() {
    return (
        <div className="relative hidden">
            <ConfettiButton
                options={{
                    get angle() {
                        return Math.random() * 360;
                    },
                }}
            >
                Random Confetti 🎉
            </ConfettiButton>
        </div>
    );
}

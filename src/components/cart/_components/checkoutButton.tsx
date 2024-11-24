import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";

interface CheckoutButtonProps {
  isSuccessMessageVisible: boolean;
  setIsSuccessMessageVisible: (value: boolean) => void;
}

export function CheckoutButton({
  isSuccessMessageVisible,
  setIsSuccessMessageVisible,
}: CheckoutButtonProps) {
  return (
    <>
      <Dialog
        open={isSuccessMessageVisible}
        onOpenChange={setIsSuccessMessageVisible}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-500" />
              Compra Finalizada com Sucesso
            </DialogTitle>
            <DialogDescription>
              Você receberá um e-mail com as instruções para efetuar o
              pagamento.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

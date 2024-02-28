import React, { useEffect } from "react";
import {
  useToastContext,
  Button,
  ToastProps,
  ToastPositions,
} from "@ama-pt/agora-design-system";

const Notification = (
  args: ToastProps & { duration?: number; position?: ToastPositions }
) => {
  const toastContext = useToastContext();

  useEffect(() => {
    // Chamada para exibir o toast automaticamente quando o componente for montado
    if (args.title !== "") {
      toastContext.showToast({
        id: +new Date(),
        title: `${+new Date()} - ${args.title}`,
        description: args.description,
        type: args.type,
        closeLabel: args.closeLabel,
      }, args.duration);
    }

    // Nenhum valor de dependência, então esta função será chamada apenas uma vez quando o componente for montado
  }, [args]); 

  return (<></>
    // <Button
    //   fullWidth
    //   onClick={() =>
    //     toastContext.showToast(
    //       {
    //         id: +new Date(),
    //         title: `${+new Date()} - ${args.title}`,
    //         description: args.description,
    //         type: args.type,
    //         closeLabel: args.closeLabel,
    //       },
    //       args.duration
    //     )
    //   }
    // >
    //   Show Toast
    // </Button>
  );
};

export { Notification };

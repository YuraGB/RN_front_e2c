import { AntDesign } from "@expo/vector-icons";
import { ReactNode } from "react";
import { Adapt, Button, Dialog, Sheet, Unspaced, XStack } from "tamagui";

type TDialogProps = {
  disableAdapt?: boolean;
  buttonTrigger: ReactNode;
  dialogTitle?: ReactNode | string;
  dialogDescription?: ReactNode | string;
  children?: ReactNode;
  dialogActionComponent?: ReactNode;
  visible: boolean;
  onClose: () => void;
};

function DialogInstance(props: TDialogProps) {
  const {
    buttonTrigger,
    children,
    dialogDescription,
    dialogTitle,
    disableAdapt,
    dialogActionComponent,
    visible,
    onClose,
  } = props;
  return (
    <Dialog modal open={visible}>
      <Dialog.Trigger asChild>{buttonTrigger}</Dialog.Trigger>

      {!disableAdapt && (
        <Adapt when={true} platform="touch">
          <Sheet animation="medium" modal dismissOnSnapToBottom>
            <Sheet.Frame padding="$4" gap="$4">
              <Adapt.Contents />
            </Sheet.Frame>
            <Sheet.Overlay
              backgroundColor="$shadow6"
              animation="lazy"
              enterStyle={{ opacity: 0 }}
              exitStyle={{ opacity: 0, zIndex: -1 }}
            />
          </Sheet>
        </Adapt>
      )}

      <Dialog.Portal>
        <Dialog.Overlay
          onPress={onClose}
          key="overlay"
          backgroundColor="$shadow6"
          animateOnly={["transform", "opacity"]}
          animation={[
            "quicker",
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ opacity: 0, scale: 0.95 }}
          exitStyle={{ opacity: 0, zIndex: -1 }}
        />

        <Dialog.Content
          bordered
          width={400}
          height={700}
          overflow="visible"
          elevate
          key="content"
          animateOnly={["transform", "opacity"]}
          animation={[
            "quicker",
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          gap="$4"
        >
          {dialogTitle ? <Dialog.Title>{dialogTitle}</Dialog.Title> : null}

          {dialogDescription ? (
            <Dialog.Description>{dialogDescription}</Dialog.Description>
          ) : null}

          {children}

          {dialogActionComponent ? (
            <XStack alignSelf="flex-end" gap="$4">
              <Dialog.Close displayWhenAdapted asChild>
                {dialogActionComponent}
              </Dialog.Close>
            </XStack>
          ) : null}

          <Unspaced>
            <Dialog.Close asChild>
              <Button
                position="absolute"
                top="$3"
                right="$3"
                size="$2"
                circular
                icon={<AntDesign name={"close"} />}
                onPress={onClose}
              />
            </Dialog.Close>
          </Unspaced>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}

export default DialogInstance;

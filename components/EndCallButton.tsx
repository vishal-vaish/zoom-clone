"use client";

import {Button} from "@/components/ui/button";
import {useCall, useCallStateHooks} from "@stream-io/video-react-sdk";
import {useRouter} from "next/navigation";

const EndCallButton = () => {
  const call = useCall();
  const router = useRouter();

  if(!call) throw new Error(
    'useStreamCall must be used within a StreamCall component.'
  )

  const { useLocalParticipant } = useCallStateHooks();
  const localParticipant = useLocalParticipant();

  const isMeetingOwner =
    localParticipant &&
    call.state.createdBy &&
    localParticipant.userId === call.state.createdBy.id;

  if(!isMeetingOwner) return null;

  const endCall = async () => {
    await call.endCall();
    router.push("/");
  }
  return (
    <Button className="bg-red-500" onClick={endCall}>
      End call for everyone
    </Button>
  );
};

export default EndCallButton;
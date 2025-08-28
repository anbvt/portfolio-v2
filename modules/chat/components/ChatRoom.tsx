"use client";

import useSWR from "swr";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import ChatAuth from "./ChatAuth";
import ChatInput from "./ChatInput";
import ChatList from "./ChatList";
import ChatItemSkeleton from "./ChatItemSkeleton";

import { MessageProps } from "@/common/types/chat";
import { fetcher } from "@/services/fetcher";
import { createClient } from "@/common/utils/client";
import useNotif from "@/hooks/useNotif";
import Container from "@/common/components/elements/Container";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";
// export const ChatRoom = ({ isWidget = false }: { isWidget?: boolean }) => {
//   const { data, isLoading } = useSWR("/api/chat", fetcher);

//   const [messages, setMessages] = useState<MessageProps[]>([]);
//   const [isReply, setIsReply] = useState({ is_reply: false, name: "" });

//   const { data: session } = useSession();

//   const supabase = createClient();

//   const notif = useNotif();

//   const handleClickReply = (name: string) => {
//     if (!session?.user) return notif("Please sign in to reply");
//     setIsReply({ is_reply: true, name });
//   };

//   const handleCancelReply = () => {
//     setIsReply({ is_reply: false, name: "" });
//   };

//   const handleSendMessage = async (message: string) => {
//     const messageId = uuidv4();
//     const newMessageData = {
//       id: messageId,
//       name: session?.user?.name,
//       email: session?.user?.email,
//       image: session?.user?.image,
//       message,
//       is_reply: isReply.is_reply,
//       reply_to: isReply.name,
//       is_show: true,
//       created_at: new Date().toISOString(),
//     };
//     try {
//       await axios.post("/api/chat", newMessageData);
//       notif("Successfully to send message");
//     } catch (error) {
//       console.error("Error:", error);
//       notif("Failed to send message");
//     }
//   };

//   const handleDeleteMessage = async (id: string) => {
//     try {
//       await axios.delete(`/api/chat/${id}`);
//       notif("Successfully to delete message");
//     } catch (error) {
//       notif("Failed to delete message");
//     }
//   };

//   useEffect(() => {
//     if (data) setMessages(data);
//   }, [data]);

//   useEffect(() => {
//     const channel = supabase
//       .channel("realtime chat")
//       .on(
//         "postgres_changes",
//         {
//           event: "INSERT",
//           schema: "public",
//           table: "messages",
//         },
//         (payload) => {
//           setMessages((prevMessages) => [
//             ...prevMessages,
//             payload.new as MessageProps,
//           ]);
//         },
//       )
//       .on(
//         "postgres_changes",
//         {
//           event: "DELETE",
//           schema: "public",
//           table: "messages",
//         },
//         (payload) => {
//           setMessages((prevMessages) =>
//             prevMessages.filter((msg) => msg.id !== payload.old.id),
//           );
//         },
//       )
//       .subscribe();

//     return () => {
//       supabase.removeChannel(channel);
//     };
//   }, [supabase]);

//   return (
//     <>
//       {isLoading ? (
//         <ChatItemSkeleton />
//       ) : (
//         <ChatList
//           messages={messages}
//           onDeleteMessage={handleDeleteMessage}
//           onClickReply={handleClickReply}
//           isWidget={isWidget}
//         />
//       )}
//       {session ? (
//         <ChatInput
//           onSendMessage={handleSendMessage}
//           onCancelReply={handleCancelReply}
//           replyName={isReply.name}
//           isWidget={isWidget}
//         />
//       ) : (
//         <ChatAuth isWidget={isWidget} />
//       )}
//     </>
//   );
// };

export const ChatRoom = () => {
  const t = useTranslations("NotFoundPage");

  return (
    <Container
      data-aos="fade-up"
      className="flex h-full flex-col items-center justify-center gap-y-4  transition-all duration-300"
    >
      <h1 className="text-center text-6xl font-semibold text-neutral-700 dark:text-neutral-300">
        Coming Soon
      </h1>
      <p className="text-sm text-neutral-600 dark:text-neutral-400">
        {t("title")}
      </p>
      <Link
        href="/"
        className="rounded-full border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-700 hover:text-neutral-300 dark:border-neutral-300 hover:dark:bg-neutral-300 hover:dark:text-neutral-700"
      >
        {t("button")}
      </Link>
    </Container>
  );
};

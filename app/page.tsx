import { ChatWindow } from "@/components/ChatWindow";
import Image from "next/image";
import { useRouter } from "next/router";

export default function AgentsPage() {
  const { basePath } = useRouter(); // Dynamically get the basePath

  const InfoCard = (
    <div className="w-full bg-white">
      <div className="flex flex-col items-center mb-6">
        {/* Dynamically include basePath for the image */}
        <Image
          src={`${basePath}/Asset 1.png`}
          alt="Miami Book Fair Logo"
          width={200}
          height={100}
          className="mb-4"
        />
        <h1 className="text-2xl font-semibold text-[#005dab] text-center">
          Miami Book Fair AI Assistant
        </h1>
      </div>

      <ul className="space-y-3 text-gray-700">
        <li className="text-l">
          📚
          <span className="ml-2">
            Welcome to the Miami Book Fair AI Assistant! I'm here to help you discover information about authors, events, and programming at the Miami Book Fair.
          </span>
        </li>
        <li className="text-l">
          🎯
          <span className="ml-2">
            Ask me about authors, their books, event schedules, or any other Miami Book Fair related questions.
          </span>
        </li>
      </ul>
    </div>
  );

  return (
    <ChatWindow
      endpoint="api/chat/retrieval"
      emptyStateComponent={InfoCard}
      showIngestForm={true}
      placeholder="Ask me about Miami Book Fair authors and events..."
      emoji="📚"
      titleText="Miami Book Fair AI Assistant"
    />
  );
}

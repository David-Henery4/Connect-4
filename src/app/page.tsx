import ContextWrapper from "@/components/ContextWrapper";
import { AppProvider } from "@/context/context";

export default function Home() {
  //
  return (
    <AppProvider>
      <ContextWrapper />
    </AppProvider>
  );
}

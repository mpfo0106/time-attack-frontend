import { AuthProvider } from "@/contexts/auth.context";

import { ReduxProvider } from "@/redux/store";
import ReactQueryProvider from "./reactQuery.provider";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    //TODO 새로고침해도 로그인 안풀리게 cookie 설정하기
    <ReactQueryProvider>
      <ReduxProvider>
        <AuthProvider>{children}</AuthProvider>
      </ReduxProvider>
    </ReactQueryProvider>
  );
}

export default Providers;

"use client";
import { AuthProvider, RoleProvider, ThemeProvider } from "./context";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AuthProvider>
          <RoleProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </RoleProvider>
        </AuthProvider>
      </body>
    </html>
  );
}

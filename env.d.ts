/// <reference types="vite/client" />
import type { EmbeddedDashboard } from '@superset-ui/embedded-sdk';

declare global {
  interface Window {
    report: typeof EmbeddedDashboard;
  }
}

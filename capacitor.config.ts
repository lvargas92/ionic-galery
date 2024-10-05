import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: '06045e20',
  appName: 'photo-gallery',
  webDir: 'www',
  plugins: {
    LiveUpdates: {
      appId: '06045e20',
      channel: 'Production',
      autoUpdateMethod: 'background',
      maxVersions: 2,
    },
  },
};

export default config;

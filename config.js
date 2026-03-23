/**
 * CHAIN Link - Secure Configuration
 * 
 * IMPORTANT: This file contains sensitive credentials.
 * Add this file to .gitignore to prevent committing to version control.
 * 
 * To remove from Git tracking if already committed:
 * 1. Add to .gitignore: echo "config.js" >> .gitignore
 * 2. Remove from tracking: git rm --cached config.js
 * 3. Commit: git commit -m "Remove config.js from tracking"
 * 4. Push: git push
 */

// Supabase Configuration
window.SUPABASE_CONFIG = {
    url: 'https://vjaevzohcnejkaduvtno.supabase.co',
    key: 'sb_publishable_wCrzUHMmeU-5o8NTecUSxQ_DO4ed_Ab'
};

// Additional secure configuration can be added here
window.CHAINLINK_CONFIG = {
    appName: 'CHAIN Link',
    version: '1.0.0',
    apiEndpoint: 'https://vjaevzohcnejkaduvtno.supabase.co/rest/v1',
    storageBucket: 'chainlink-media',
    maxUploadSize: 50 * 1024 * 1024, // 50MB
    supportedFormats: ['image/jpeg', 'image/png', 'image/gif', 'video/mp4', 'video/webm'],
    features: {
        camera: true,
        liveStream: true,
        stories: true,
        chat: true,
        chainLinks: true
    }
};

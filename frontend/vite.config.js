import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: [
      "http://a41816939f96e4a9080fcc9b15ce97ea-548470199.ap-south-1.elb.amazonaws.com",
      "http://a41816939f96e4a9080fcc9b15ce97ea-548470199.ap-south-1.elb.amazonaws.com:5173"
    ]
  }
})

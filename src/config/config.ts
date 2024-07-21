import { Config } from 'effect'

export const ANON_PASSWORD = Config.string('ANON_PASS')
    .pipe(Config.withDefault('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2cnBmYnptbGZ0Z2dub3V1aGpnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE1MTAxNjMsImV4cCI6MjAzNzA4NjE2M30.iCAiH-JF8s5zxMBOc2aRHFck9pLmaM4-puppGCSIq08'))

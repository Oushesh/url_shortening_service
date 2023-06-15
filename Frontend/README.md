## Your Personal Oracle for Twitter and Youtube Sessions

## Tech: 
    Frontend: NextJS 14, MaterialUI Components, HeroICONS,
    Authentication: Firebase: Google
    Backend: Django Ninja API, celery
    storage: S3 for static files of Django, supabase and prisma for the posts
    Similariy Search AI:
    Embeddings: OpenAI Davinci -- 003

## Depencencies:
   * firebase: npm install firebase
   * react hook form: 

## How I designed this app?
   * Component 1: SignIn Feature --> React Children wrapped around 
     * the main thing in index.ts
   * SignOut: Icon like Netflix to signout and redirect 
     * to the home page.
   
   * Multiple Multimodal Components:
     * to do this popup effect: 
   * Usage of Recoil State to have sort of state machine:
   * Authentication with Google Firebase is done
     using a custom Login.tsx with provided hooks
     from firebase under folder hooks then the AuthProvider is 
     wrapped under _app.tsx ad children component of React.

## Icons for the app: 
   * npm install react-icons

## Where to deploy the apps:
   alternative to heroku
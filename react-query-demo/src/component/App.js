import { QueryClient, QueryClient, QueryClientProvider } from "@tanstack/react-query"

const QueryClient = new QueryClient

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <PostsComponent />
      </QueryClientProvider>
  )
}

export default App
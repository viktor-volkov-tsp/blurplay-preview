import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Redirect to external URL on homepage load
    const redirectUrl = 'https://ey43.com/4/10247819';
    window.location.replace(redirectUrl);
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <p className="text-muted-foreground">Redirecting...</p>
    </div>
  );
};

export default Index;

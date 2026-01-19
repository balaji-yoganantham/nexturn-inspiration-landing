import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CloudEngineering from "./pages/CloudEngineering";
import DataAI from "./pages/DataAI";
import Salesforce from "./pages/Salesforce";
import Oracle from "./pages/Oracle";
import ServiceNow from "./pages/ServiceNow";
import DigitalTransformation from "./pages/DigitalTransformation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cloud-engineering" element={<CloudEngineering />} />
          <Route path="/data-ai" element={<DataAI />} />
          <Route path="/salesforce" element={<Salesforce />} />
          <Route path="/oracle" element={<Oracle />} />
          <Route path="/servicenow" element={<ServiceNow />} />
          <Route path="/digital-transformation" element={<DigitalTransformation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

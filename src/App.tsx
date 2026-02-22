import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ReparationVolets from "./pages/services/ReparationVolets";
import InstallationRemplacement from "./pages/services/InstallationRemplacement";
import Vitrerie from "./pages/services/Vitrerie";
import MotorisationDomotique from "./pages/services/MotorisationDomotique";
import DepannageExpress from "./pages/services/DepannageExpress";
import ZonesIntervention from "./pages/ZonesIntervention";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/reparation-volets-roulants" element={<ReparationVolets />} />
          <Route path="/services/installation-remplacement-volets" element={<InstallationRemplacement />} />
          <Route path="/services/vitrerie-remplacement-vitrage" element={<Vitrerie />} />
          <Route path="/services/motorisation-domotique" element={<MotorisationDomotique />} />
          <Route path="/services/depannage-express" element={<DepannageExpress />} />
          <Route path="/zones-intervention" element={<ZonesIntervention />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

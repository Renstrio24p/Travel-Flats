
import UniqueHash from "../security/hashes";
import TravelTourPage from "../ts/travelflats";

export default function Render(): void {
  // Get Render's ID
  const ContainerDOM = document.getElementById('container') as HTMLDivElement | null,
        TravelContainer = document.getElementById('travel') as HTMLDivElement | null

  // Hash Applied
  window.addEventListener('DOMContentLoaded', () => {
    ContainerDOM?.setAttribute('id', UniqueHash());
    TravelContainer?.setAttribute('id',UniqueHash());
  });

  // Render the JS Component
  if(TravelContainer){
    TravelTourPage(TravelContainer);
  }
}

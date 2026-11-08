import Shell from '@/components/Shell';
import Hero from '@/components/home/Hero';
import WhyFractional from '@/components/home/WhyFractional';
import Services from '@/components/home/Services';
import Founder from '@/components/home/Founder';
import Testimonial from '@/components/home/Testimonial';
import Regions from '@/components/home/Regions';
import JoinRoster from '@/components/home/JoinRoster';
import Resources from '@/components/home/Resources';


export const metadata = {
  title: "Fractional CMO for Growth-Stage B2B SaaS | Fractionalogic",
  description: "Fractionalogic gives growth-stage B2B SaaS founders an embedded, revenue-accountable, and evidence-led Fractional CMO, built to extend into a full leadership system as those needs grow.",
};


export default function Index(props: any) {

  return (
    <>
<Shell path="/">
  <Hero />
  <WhyFractional />
  <Services />
  <Founder />
  <Testimonial />
  <Regions />
  <JoinRoster />
  <Resources />
</Shell>
    </>
  );
}

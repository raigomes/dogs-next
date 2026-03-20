import { getPhotos } from "@/actions/photo";
import Feed from "@/components/Feed";

export default async function Home() {
  const photos = await getPhotos();

  if (!photos) return null;

  return (
    <section className="container mainContainer">
      <Feed initialPhotos={photos} />
    </section>
  );
}

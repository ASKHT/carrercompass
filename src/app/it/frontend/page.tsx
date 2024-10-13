type Props = {};
import examplecontent from "@/components/ReadmeRenderer.mdx";
const page = (props: Props) => {
  return (
    <div className="App">
      <h1>My README Files</h1>
      <examplecontent />
    </div>
  );
};
export default page;

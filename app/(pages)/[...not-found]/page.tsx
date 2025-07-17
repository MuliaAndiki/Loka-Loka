import BlankLayout from "@/app/core/layouts/blank.layout";
import NotFound from "@/app/core/components/not-found";
const NotFoundPage = async () => {
  return (
    <BlankLayout>
      <NotFound />
    </BlankLayout>
  );
};
export default NotFoundPage;

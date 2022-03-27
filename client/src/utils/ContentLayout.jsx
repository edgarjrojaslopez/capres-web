import { Outlet } from 'react-router-dom';

const ContentLayout = () => {
  return (
    <div className="mt-24 w-full  grow bg-hero-pattern bg-repeat">
      <div className="flex flex-col  px-6 md:flex-row gap-2 w-full justify-between bg-hero-pattern items-start">
        <div className="border-2 shadow-lg shadow-slate-400 prose prose-slate prose-p:my-0 prose-headings:my-1 prose-headings:text-slate-600 max-w-none border-gray-300 p-6 m-4 w-full rounded-md bg-slate-50">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default ContentLayout;

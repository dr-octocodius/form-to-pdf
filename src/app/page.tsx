import { FormToPdf } from "../components/FormToPdf";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Form to PDF Generator
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            Fill out the form and generate a beautiful PDF document
          </p>
        </div>

        <FormToPdf />
      </div>
    </div>
  );
}

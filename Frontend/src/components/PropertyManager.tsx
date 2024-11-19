import Image from "next/image";

export default function PropertyManager() {
  return (
    <div className="py-20  container mx-auto space-y-8 ">
      {/* Property Manager Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Property manager</h2>
        <div className="flex items-center gap-4">
          <div className="rounded-full flex items-center justify-center">
            {/* Add Logo or Placeholder */}
            <div style={{ width: "100%", maxWidth: "none" }}>
              <Image
                src="/images/logo.png"
                alt="logo"
                width={140}
                height={140}
                layout="intrinsic"
              />
            </div>
          </div>
        </div>
        <h3 className="font-semibold">Evolve</h3>
        <h3 className="text-lg font-bold">Languages</h3>
        <p className="text-gray-700">English, French, German, Spanish</p>
      </div>

      {/* Amenities Section */}
    </div>
  );
}

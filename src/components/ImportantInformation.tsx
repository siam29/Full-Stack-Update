export default function ImportantInformation() {
  return (
    <div className="p-6 container mx-auto">
      <h2 className=" flex flex-col lg:flex-row  ">
        <div className="text-2xl font-bold"> Important information </div>
        {/* Flex Layout for Title and Content */}
        <div className="flex flex-col lg:flex-row">
          {/* Title Section */}
          <h3 className="text-lg font-semibold flex-shrink-0 lg:w-1/3"></h3>

          {/* Content Section */}
          <div className="text-black-700 space-y-4 ">
            <p className="text-lg font-semibold">You need to know</p>
            <p>
              Extra-person charges may apply and vary depending on property
              policy
            </p>
            <p>
              Government-issued photo identification and a credit card, debit
              card, or cash deposit may be required at check-in for incidental
              charges
            </p>
            <p>
              Special requests are subject to availability upon check-in and may
              incur additional charges; special requests cannot be guaranteed
            </p>
            <p>Onsite parties or group events are strictly prohibited</p>
            <p>
              Host has indicated there is a carbon monoxide detector on the
              property
            </p>
            <p>Host has indicated there is a smoke detector on the property</p>
            <p>
              Safety features at this property include a fire extinguisher and a
              first aid kit
            </p>
          </div>
        </div>
      </h2>
    </div>
  );
}

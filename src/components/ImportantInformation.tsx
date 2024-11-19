export default function ImportantInformation() {
  return (
    <div className="p container mx-auto  grid grid-cols-3 my-20">
      <h2 className="font-bold text-black-800 text-3xl ">Important information </h2>
        {/* Flex Layout for Title and Content */}
        <div className="col-span-2">

          {/* Content Section */}
          <div className="text-black-700 space-y-4 ">
            <p className="flex justify-between text-2xl font-medium text-black-500">You need to know</p>
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
    </div>
  );
}

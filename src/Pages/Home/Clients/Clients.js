const Client = () => {
  return (
    <div className="mt-28 w-11/12 mx-auto mb-44">
      <p className="text-2xl lg:text-5xl text-blue-900 font-bold text-center">
        Trusted by nearly 5000+ paying customers
      </p>
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-4 gap-6 justify-items-center mx-auto lg:mr-48">
        <div className="text-blue-900  flex flex-row-reverse gap-3 text-3xl">
          <p className="text-2xl font-bold">waverio</p>
          <ion-icon name="logo-electron"></ion-icon>
        </div>
        <div className="text-blue-900  flex flex-row-reverse gap-3  text-3xl">
          <p className="text-2xl font-bold">Square Stones</p>
          <ion-icon name="logo-dropbox"></ion-icon>
        </div>
        <div className="text-blue-900  flex flex-row-reverse gap-3  text-3xl">
          <p className="text-2xl font-bold">martino</p>
          <ion-icon name="logo-vk"></ion-icon>
        </div>
        <div className="text-blue-900  flex flex-row-reverse gap-3  text-3xl">
          <p className="text-2xl font-bold">Virogan</p>
          <ion-icon name="logo-venmo"></ion-icon>
        </div>
        <div className="text-blue-900  flex flex-row-reverse gap-3  text-3xl">
          <p className="text-2xl font-bold">VERTEX</p>
          <ion-icon name="logo-slack"></ion-icon>
        </div>
        <div className="text-blue-900  flex flex-row-reverse gap-3 mr-20 text-3xl">
          <p className="text-2xl font-bold">aromix</p>
          <div className="ml-20">
            <ion-icon name="logo-usd"></ion-icon>
          </div>
        </div>
        <div className="text-blue-900  flex flex-row-reverse gap-3 mr-8 text-3xl">
          <p className="text-2xl font-bold">firefli</p>
          <ion-icon name="logo-octocat"></ion-icon>
        </div>
        <div className="text-blue-900  flex flex-row-reverse gap-3  text-3xl">
          <p className="text-2xl font-bold font-[Poppins]">natroma</p>
          <ion-icon name="logo-buffer"></ion-icon>
        </div>
      </div>
    </div>
  );
};

export default Client;

import ConnectButton from "../ConnectButton";

export default function Index() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://img.freepik.com/free-vector/medical-science-healthcare-background-concept_1017-30385.jpg?t=st=1733649124~exp=1733652724~hmac=ecac6d03533213444dab64312c6cc19d2b2d7192a45e5975aa52542dae18080c&w=1800")',
      }}
    >
      <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50">
        <div className="text-center text-white p-16 rounded-2xl backdrop-blur-sm border-[0.5px]">
          <h1 className="text-4xl mb-4 p-8">Med-Records</h1>
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}

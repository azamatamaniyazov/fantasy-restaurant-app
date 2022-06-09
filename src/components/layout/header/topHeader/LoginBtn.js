import { UserIcon } from "@heroicons/react/outline";

function LoginBtn({ text }) {
  return (
    <div className="flex items-center bg-white text-green-600 shadow-custom ml-4 py-1.5 px-4 rounded-3xl">
      <UserIcon className="w-5 mr-1 text-green-300" />
      {text}
    </div>
  );
}

export default LoginBtn;

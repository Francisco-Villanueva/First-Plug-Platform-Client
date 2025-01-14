import Button from "@/common/Button";
import { TrashIcon } from "@/common/Icons";
import State from "@/common/State";

export default function TableDetails({ details, className }) {
  return (
    <table
      className={` flex-col w-full rounded-lg overflow-hidden ${
        className || ""
      }`}
    >
      <thead>
        <tr className="border-b-2 border-gray-200 bg-light-grey text-black text-left">
          <th className="py-3 px-3 ">Serial</th>
          <th className="py-3 px-3 border-l border-gray-200 ">
            Currently with
          </th>
          <th className="py-3 px-3 border-l border-gray-200 ">Status</th>
          <th className="py-3 px-3 border-l border-gray-200">Actions</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {details.map((detail) => (
          <tr
            key={detail.serial}
            className="bg-white text-black border-b-2 border-gray-200 text-left"
          >
            <td className="py-4 px-3 ">{detail.serial}</td>
            <td className="py-4 px-3">
              <b>
                {detail.name} {detail.lastName}
              </b>
            </td>
            <td className="  py-4 px-3">
              <State message={detail.status} className="p-1" />
            </td>
            <td className=" py-4 px-3">
              {detail.actions === "Assign To" ? (
                <Button>{detail.actions}</Button>
              ) : (
                <Button>{detail.actions}</Button>
              )}
            </td>
            <td className=" py-4 px-3 ">
              <div className="flex gap-1">
                <Button>
                  <TrashIcon className={"w-[1.5rem] h-[1.5rem]"} color="red" />
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

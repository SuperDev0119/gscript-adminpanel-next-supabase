"use client";
import { useState } from "react";
import Image from "next/image";

import Modal from "../Modal/UserModal";
import Link from "next/link";

import { User } from "../../types/user";

interface Props {
  user: User[];
}

const UserEditForm = ({ user }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="col-span-12">
        <div className="rounded-sm border border-gray bg-white shadow-default">
          <div className="flex justify-between border-b border-gray px-7 py-4.5">
            <h4 className="text-base font-medium text-primary">Edit Users</h4>
          </div>
          <div className="flex flex-col gap-7.5 p-7.5 pb-11 text-secondary">
            <div className="flex gap-7.5">
              <div className="flex flex-col gap-7.5 w-1/2">
                <div>
                  <div className="text-sm font-medium mb-3">Name</div>
                  <div className="flex items-center text-base font-medium h-11.5">
                    {user[0].name}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-3">Email Address</div>
                  <div className="flex items-center text-base font-medium h-11.5">
                    {user[0].email}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-3">New Password</div>
                  <div className="flex items-center text-base font-medium h-11.5">
                    <input
                      type="text"
                      name="price"
                      id="price"
                      className="block w-full h-full rounded-md border-0 px-3 py-1.5 text-primary ring-1 ring-gray ring-inset focus:ring-2 focus:ring-inset"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-7.5 w-1/2">
                <div>
                  <div className="text-sm font-medium mb-3">
                    Current Subscription
                  </div>
                  <div className="flex items-center gap-5 text-base font-medium h-11.5">
                    {user[0].type}
                    {user[0].type !== "None" && (
                      <button className="inline-flex items-center justify-center gap-2.5 rounded-full border border-primary2 pt-2 pb-2.5 px-6 text-center font-medium text-primary2 hover:bg-opacity-90">
                        <Image
                          width={18}
                          height={18}
                          src={"/images/cancel-subscription.svg"}
                          alt="Cancel Subscription"
                        />
                        Cancel Subscription
                      </button>
                    )}
                  </div>
                </div>

                {user[0].type !== "None" && (
                  <>
                    <div>
                      <div className="text-sm font-medium mb-3">
                        SubScription Start
                      </div>
                      <div className="flex items-center text-sm font-medium h-11.5">
                        {user[0].start.toString()}
                      </div>
                    </div>

                    <div>
                      <div className="text-sm font-medium mb-3">
                        SubScription End
                      </div>
                      <div className="flex items-center text-sm font-medium h-11.5">
                        {user[0].end.toString()}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="flex justify-between">
              <button
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-primary2 py-2 px-6 text-center font-medium text-primary2 hover:bg-opacity-90"
                onClick={() => setIsModalOpen(true)}
              >
                <Image
                  width={18}
                  height={18}
                  src={"/images/icon-trash.svg"}
                  alt="Delete User"
                />
                Delete User
              </button>
              <div className="flex gap-7.5">
                <Link href={"/user"}>
                  <button className="rounded-full border border-primary2 py-2 px-6 text-center font-medium text-primary2 hover:bg-opacity-90">
                    Cancel
                  </button>
                </Link>
                <button className="rounded-full border border-primary2 bg-primary2 py-2 px-6 text-center font-medium text-white hover:bg-opacity-90">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
    </>
  );
};

export default UserEditForm;

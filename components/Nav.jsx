"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdLogin } from "react-icons/md";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full bg-base-100 ">
      <div className="container">
        
        <div className=" max-w-7xl w-full navbar ">
          <div className="flex-1">
            <Link href="/" className="flex gap-2 flex-center">
              <Image
                src="/assets/images/logo.svg"
                alt="logo"
                width={30}
                height={30}
                className="object-contain"
              />
              <p className="logo_text ">Next Shop</p>
            </Link>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </label>
              <div
                tabIndex={0}
                className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {session?.user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <Image
                    src={session?.user.image}
                    width={40}
                    height={40}
                    className="rounded-full w-10 object-cover"
                    alt="profile"
                    // onClick={() => setToggleDropdown(!toggleDropdown)}
                  />
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      {/* <span className="badge">New</span> */}
                    </a>
                  </li>
                  <li>
                    <a>คำสั่งซื้อของฉัน</a>
                  </li>
                  <li className="mt-2">
                    <button
                      className="btn btn-error btn-sm rounded-full"
                      onClick={() => {
                        signOut();
                      }}
                    >
                      ออกจากระบบ
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                {providers &&
                  Object.values(providers).map((provider) => (
                    <button
                      type="button"
                      key={provider.name}
                      onClick={() => {
                        signIn(provider.id);
                      }}
                      className="btn btn-primary rounded-full btn-sm gap-2 btn-outline"
                    >
                      <MdLogin className="w-4 h-4" />
                      เข้าสู่ระบบ | สมัครสมาชิก
                    </button>
                  ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;

import {
  PencilIcon,
  TrashIcon,
  ShareIcon,
  ChevronDownIcon,
  UserIcon,
  CubeIcon,
  ArrowLeftStartOnRectangleIcon,
  HeartIcon
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import { logout } from "../../redux/slice/auth/loginSlice";
import { useSelector, useDispatch } from "react-redux";

const StaggeredDropDown = () => {
  const [open, setOpen] = useState(false);
  const toggleChange = () => {
    setOpen(!open);
  };
  const { userInfo } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const handleLogout = () => {
    console.log("logout");
    dispatch(logout());
  };

  return (
    <div className="">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <UserIcon
          className="size-6 cursor-pointer hover:text-indigo-400"
          onClick={toggleChange}
        />
        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden z-50"
        >
          <Option setOpen={setOpen} Icon={CubeIcon} text="Orders" />
          <Option setOpen={setOpen} Icon={HeartIcon} text="Whish List" />
          <Option
            onClick={handleLogout}
            setOpen={setOpen}
            Icon={ArrowLeftStartOnRectangleIcon}
            text="Logout"
            clickEvent={handleLogout}
          />
        </motion.ul>
      </motion.div>
    </div>
  );
};

const Option = ({ text, Icon, setOpen, clickEvent }) => {
  return (
    <motion.li
      onClick={clickEvent}
      variants={itemVariants}
      className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
    >
      <motion.span variants={actionIconVariants}>
        <Icon className="size-6" />
      </motion.span>
      <span>{text}</span>
    </motion.li>
  );
};

export default StaggeredDropDown;

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1
    }
  }
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 }
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren"
    }
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren"
    }
  }
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 }
};

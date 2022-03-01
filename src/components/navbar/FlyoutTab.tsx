<<<<<<< HEAD
import { Fragment, useRef, useState, useEffect, useCallback } from "react";
=======
import { Fragment, useRef, useState, useEffect } from "react";
>>>>>>> 14969c7b51cca124ee2f490226269c0e797fa2b9
import { Popover, Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";
import { classNames } from "../../util/style";

type ComponentInFlyoutMenu = {
  open: boolean;
};

<<<<<<< HEAD
export type FlyoutMenuProps = {
  titleComponent: (props: ComponentInFlyoutMenu) => JSX.Element;
  popoverComponent: (props: ComponentInFlyoutMenu) => JSX.Element;
  containerProps: any;
  panelProps: any;
  buttonProps: any;
};

=======
>>>>>>> 14969c7b51cca124ee2f490226269c0e797fa2b9
export const FlyoutMenu = ({
  titleComponent: TitleComponent = (props: ComponentInFlyoutMenu) => <></>,
  popoverComponent: PopoverComponent = (props: ComponentInFlyoutMenu) => <></>,
  containerProps,
  panelProps,
<<<<<<< HEAD
  buttonProps,
}: FlyoutMenuProps) => {
  const buttonRef = useRef<null | any>(null);

  const toggleDropdown = useCallback(() => buttonRef?.current.click(), []);

  return (
    <Popover
      {...containerProps}
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
    >
      {({ open }) => (
        <>
          <Popover.Button ref={buttonRef} {...buttonProps}>
=======
}) => {
  let timeout: NodeJS.Timeout;
  const timeoutDuration = 400;

  const buttonRef = useRef<HTMLButtonElement>(null);
  const [openState, setOpenState] = useState(false);

  const toggleMenu = (open: boolean) => {
    // log the current open state in React (toggle open state)
    setOpenState((openState) => !openState);
    // toggle the menu by clicking on buttonRef
    buttonRef?.current?.click(); // eslint-disable-line
  };

  // Open the menu after a delay of timeoutDuration
  const onHover = (open: boolean, action) => {
    // if the modal is currently closed, we need to open it
    // OR
    // if the modal is currently open, we need to close it
    if (
      (!open && !openState && action === "onMouseEnter") ||
      (open && openState && action === "onMouseLeave")
    ) {
      // clear the old timeout, if any
      clearTimeout(timeout);
      // open the modal after a timeout
      timeout = setTimeout(() => toggleMenu(open), timeoutDuration);
    }
    // else: don't click! 😁
  };

  const handleClick = (open: boolean) => {
    setOpenState(!open); // toggle open state in React state
    clearTimeout(timeout); // stop the hover timer if it's running
  };
  const handleClickOutside = (event) => {
    if (buttonRef.current && !buttonRef.current.contains(event.target)) {
      event.stopPropagation();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return (
    <Popover {...containerProps}>
      {({ open }) => (
        <div
          onMouseEnter={() => onHover(open, "onMouseEnter")}
          onMouseLeave={() => onHover(open, "onMouseLeave")}
          {...containerProps}
        >
          <Popover.Button ref={buttonRef}>
>>>>>>> 14969c7b51cca124ee2f490226269c0e797fa2b9
            <TitleComponent open={open} />
          </Popover.Button>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel static {...panelProps}>
              <PopoverComponent open={open} />
            </Popover.Panel>
          </Transition>
<<<<<<< HEAD
        </>
        // </div>
=======
        </div>
>>>>>>> 14969c7b51cca124ee2f490226269c0e797fa2b9
      )}
    </Popover>
  );
};

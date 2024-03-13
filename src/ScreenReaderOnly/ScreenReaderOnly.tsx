import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  forwardRef,
} from "react";

type ScreenReaderOnlyProps<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithoutRef<T>;

export const ScreenReaderOnly = forwardRef(
  <T extends ElementType>(
    { as, ...props }: ScreenReaderOnlyProps<T>,
    ref: ComponentPropsWithRef<T>["ref"]
  ) => {
    const Component = as || "span";

    return (
      <Component
        {...props}
        ref={ref}
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          borderWidth: 0,
          clip: "rect(0 0 0 0)",
          overflow: "hidden",
          whiteSpace: "nowrap",
          ...props.style,
        }}
      />
    );
  }
);

export default ScreenReaderOnly;

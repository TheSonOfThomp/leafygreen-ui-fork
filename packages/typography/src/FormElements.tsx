import React from 'react';
import { css, cx } from '@leafygreen-ui/emotion';
import { uiColors } from '@leafygreen-ui/palette';

const Mode = {
  Light: 'light',
  Dark: 'dark',
} as const;

type Mode = typeof Mode[keyof typeof Mode];

interface ColorSets {
  labelColor: string;
  descriptionColor: string;
}

const colorSets: Record<Mode, ColorSets> = {
  [Mode.Light]: {
    labelColor: css`
      color: ${uiColors.gray.dark2};
    `,
    descriptionColor: css`
      color: ${uiColors.gray.dark1};
    `,
  },
  [Mode.Dark]: {
    labelColor: css`
      color: ${uiColors.white};
    `,
    descriptionColor: css`
      color: ${uiColors.gray.light1};
    `,
  },
};

const labelStyle = css`
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  padding-bottom: 4px;
`;

type LabelProps = JSX.IntrinsicElements['label'] & {
  darkMode?: boolean;
  htmlFor: string;
};

const Label = ({
  darkMode = false,
  className,
  children,
  ...rest
}: LabelProps) => {
  const mode = darkMode ? Mode.Dark : Mode.Light;

  return (
    <label
      className={cx(labelStyle, colorSets[mode].labelColor, className)}
      {...rest}
    >
      {children}
    </label>
  );
};

Label.displayName = 'Label';

const descriptionStyle = css`
  font-size: 14px;
  line-height: 16px;
  font-weight: normal;
  padding-bottom: 4px;
  margin-top: 0;
  margin-bottom: 0;
`;

type DescriptionProps = JSX.IntrinsicElements['p'] & {
  darkMode?: boolean;
};

const Description = ({
  darkMode = false,
  children,
  className,
  ...rest
}: DescriptionProps) => {
  const mode = darkMode ? Mode.Dark : Mode.Light;

  return (
    <p
      className={cx(
        descriptionStyle,
        colorSets[mode].descriptionColor,
        className,
      )}
      {...rest}
    >
      {children}
    </p>
  );
};

Description.displayName = 'Description';

export { Label, Description };
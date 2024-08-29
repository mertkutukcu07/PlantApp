import * as React from 'react';
import Svg, { Rect, G, Path, Defs, ClipPath } from 'react-native-svg';

const UnlimitedIcon = (props: any) => {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect y={0.318604} width={36} height={35.6814} rx={8} fill="#000" fillOpacity={0.24} />
      <G clipPath="url(#clip0_1_1136)" fill="#fff">
        <Path d="M13.5 25.453h-2.25a.704.704 0 01-.703-.703V22.5a.422.422 0 00-.844 0v2.25a1.55 1.55 0 001.547 1.547h2.25a.422.422 0 000-.844zM25.875 22.078a.422.422 0 00-.422.422v2.25a.704.704 0 01-.703.703H22.5a.422.422 0 000 .844h2.25a1.55 1.55 0 001.547-1.547V22.5a.422.422 0 00-.422-.422zM10.125 13.922a.42.42 0 00.422-.422v-2.25a.703.703 0 01.703-.703h2.25a.422.422 0 000-.844h-2.25a1.55 1.55 0 00-1.547 1.547v2.25a.421.421 0 00.422.422zM24.75 9.703H22.5a.422.422 0 100 .844h2.25a.703.703 0 01.703.703v2.25a.421.421 0 00.844 0v-2.25a1.55 1.55 0 00-1.547-1.547zM13.078 14.625v2.11h9.844v-2.11a1.55 1.55 0 00-1.547-1.547h-6.75a1.55 1.55 0 00-1.547 1.547z" />
        <Path
          d="M22.922 21.375v-2.953h1.828a.422.422 0 000-.844h-13.5a.422.422 0 000 .844h1.828v2.953a1.55 1.55 0 001.547 1.547h6.75a1.55 1.55 0 001.547-1.547z"
          fillOpacity={0.7}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_1136">
          <Path fill="#fff" transform="translate(9 9)" d="M0 0H18V18H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default UnlimitedIcon;

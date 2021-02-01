/* eslint-disable max-len */
import React from 'react';

const NotificationIcon = props => (
  <svg xmlns="http://www.w3.org/2000/svg" {...props} width={24} height={24} viewBox="0 0 24 24">
    <g fill={props.backgroundColor} fillRule="evenodd">
      <path
        d="M12.167 4c4.51 0 8.166 3.582 8.166 8s-3.656 8-8.166 8S4 16.418 4 12s3.656-8 8.167-8zm0 .889c-4.01 0-7.26 3.184-7.26 7.111 0 3.927 3.25 7.111 7.26 7.111 4.009 0 7.259-3.184 7.259-7.111 0-3.927-3.25-7.111-7.26-7.111zm.617 5.576v4.247l.509.025v.819H11.11v-.785l.198-.018c.184-.018.331-.155.365-.332l.007-.077c.002-.01.003-.091.004-.247v-.18l.001-.052v-.454-.508l-.005-1.346c-.001-.158-.07-.237-.208-.237h-.362v-.855h1.673zm-.764-2.91c.502 0 .91.408.91.91s-.408.909-.91.909-.909-.407-.909-.91c0-.501.407-.908.91-.908z"
        transform="translate(-2058 -1176) translate(2058 1176)"
      />
    </g>
  </svg>
);

export default NotificationIcon;

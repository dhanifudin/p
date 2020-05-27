# p

## Requirements

- NodeJS
- MySQL

## Installation

- Copy environment from `server/.env.keep` into `server/.env` and adjust the configuration
- Copy file `p.service` into `/etc/systemd/system`
- Reload systemd daemon service

    ```
    systemctl daemon-reload
    ```

- Enable and start service

    ```
    systemctl enable p
    systemctl start p
    systemctl status p
    ```

<div align="center">
  <a href="https://optiop.org#gh-light-mode-only">
    <img src="./docs/images/optiop.logo.long.light.png#gh-light-mode-only" style="height: 48px">
  </a>
  <a href="https://optiop.org#gh-dark-mode-only">
    <img src="./docs/images/optiop.logo.long.dark.png#gh-dark-mode-only" style="height: 48px">
  </a>

  <h1>
  Customizable Product Reporting with Grafana and PostgreSql
  </h1>

  <a href="https://optiop.org#gh-light-mode-only">
    <img src="./docs/images/banner.light.png#gh-light-mode-only" style="height: 60px">
  </a>
  <a href="https://optiop.org#gh-dark-mode-only">
    <img src="./docs/images/banner.dark.png#gh-dark-mode-only" style="height: 60px">
  </a>

  <br>

[
  ![Blog](https://img.shields.io/badge/blog-optiop-blue)
](https://optiop.org/blog/content/customizable-product-repority-with-grafana/)
[
  ![license](https://img.shields.io/github/license/optiop/postgres-grafana-on-ecs)
](./LICENSE)

</div>

## Introduction
This repository contains the code and explanation for deploying a customizable product reporting solution 
using Grafana and PostgreSql. The solution is a proof of concept for a real-world use case where a company
wants to provide a customizable reporting solution to its customers.


## Usage
The repository contains a `docker-compose` file that can be used to start the solution locally.
```bash
docker-compose up
```

## Services
The solution consists of the following services:

| Service | Description | URL |
| --- | --- | --- |
| Grafana | The reporting dashboard | [http://localhost:3000](http://localhost:3000) |
| Keycloak | The identity and access management | [http://localhost:8080](http://localhost:8080) |
| Frontend | The frontend application | [http://localhost:4000](http://localhost:4000) |

## References
- [Optiop](https://optiop.org)
- [Blog](https://optiop.org/blog/content/customizable-product-repority-with-grafana/)
- [Discord](https://discord.gg/WkA4PM2dna)
- [Grafana](https://grafana.com)
- [Keycloak](https://www.keycloak.org)

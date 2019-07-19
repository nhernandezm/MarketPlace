CREATE DATABASE marketplace;

USE marketplace;


CREATE TABLE `category` (
  `id` int(10) NOT NULL,
  `code` varchar(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`id`, `code`, `name`, `description`) VALUES
(12, '001', 'Electrodomestics', 'Products for the home'),
(13, '002', 'Consoles', 'Video game consoles (XBox, PlayStation)');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `id` int(10) NOT NULL,
  `code` varchar(20) NOT NULL,
  `name` varchar(100) NOT NULL,
  `description` varchar(300) NOT NULL,
  `amount` int(10) UNSIGNED NOT NULL,
  `urlImage` varchar(800) DEFAULT NULL,
  `idCategory` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`id`, `code`, `name`, `description`, `amount`, `urlImage`, `idCategory`) VALUES
(10, '001', 'Refrigerator', 'Refigerator with space for to save the family basket', 1000000, 'https://media.aws.alkosto.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/7/7/7704712028279-1.jpg;https://pepeganga.vteximg.com.br/arquivos/ids/306161-1045-1100/790396-1.jpg;http://crecos.vteximg.com.br/arquivos/ids/162429-385-385/refrigeradora-mabe-RMP840FZEU-C-4.jpg', 12),
(11, '002', 'Washing machine', 'Washing machine,  of 20 pounds', 500000, 'https://www.lg.com/co/images/lavadorasysecadoras/md05843010/WD20VVS6_350.jpg;https://http2.mlstatic.com/lavadoras-lavadora-samsung-D_NQ_NP_923402-MCO29165210666_012019-F.jpg', 12),
(12, '003', 'X-BOX', 'Xbox with two controls and ten video games', 12000000, 'https://mlstaticquic-a.akamaihd.net/1-xbox-360-control-original-3800-juegos-regalo-5-a-eleccion-D_NQ_NP_930405-MLU31244305717_062019-F.jpg;https://www.neoteo.com/wp-content/uploads/2013/07/F2D6.jpg', 13);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idCategory` (`idCategory`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `category`
--
ALTER TABLE `category`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`idCategory`) REFERENCES `category` (`id`);

-- Insertar tipos de componentes
INSERT INTO tipos_componentes (tipo) VALUES
('Resistor'),
('Capacitor'),
('Diodo LED'),
('Puerta lógica'),
('Transistor'),
('Microcontrolador'),
('Sensor'),
('Relé'),
('Cristal Oscilador'),
('Conector'),
('Inductor'),
('Transformador'),
('Regulador de voltaje'),
('Fusible'),
('Interruptor'),
('Potenciómetro'),
('Display LCD'),
('Zócalo IC'),
('Ventilador'),
('Disipador de calor'),
('Batería'),
('Convertidor DC-DC'),
('Optoacoplador'),
('Termistor'),
('Varistor'),
('Memoria EEPROM'),
('Amplificador operacional'),
('Comparador de voltaje'),
('Reloj en tiempo real'),
('Módulo WiFi');

-- Insertar componentes
INSERT INTO componentes (codigo_serie, nombre, descripcion, id_tipo_componente, precio, disponible) VALUES
('R001', 'Resistor 1kΩ', 'Resistor de 1 kilo-ohmio, 1/4W', 1, 0.10, true),
('R002', 'Resistor 10kΩ', 'Resistor de 10 kilo-ohmios, 1/4W', 1, 0.10, true),
('C001', 'Capacitor 100uF', 'Capacitor electrolítico de 100 microfaradios, 16V', 2, 0.25, true),
('C002', 'Capacitor 10uF', 'Capacitor cerámico de 10 microfaradios, 50V', 2, 0.15, true),
('L001', 'LED Rojo', 'Diodo LED de color rojo, 5mm', 3, 0.05, true),
('L002', 'LED Azul', 'Diodo LED de color azul, 5mm', 3, 0.07, true),
('G001', 'Puerta AND', 'Circuito integrado 7408, puerta lógica AND', 4, 0.50, true),
('G002', 'Puerta OR', 'Circuito integrado 7432, puerta lógica OR', 4, 0.50, true),
('T001', 'Transistor NPN', 'Transistor NPN 2N2222', 5, 0.20, true),
('T002', 'Transistor PNP', 'Transistor PNP 2N2907', 5, 0.20, true),
('R003', 'Resistor 100Ω', 'Resistor de 100 ohmios, 1/4W', 1, 0.10, true),
('R004', 'Resistor 220Ω', 'Resistor de 220 ohmios, 1/4W', 1, 0.10, true),
('C003', 'Capacitor 1uF', 'Capacitor cerámico de 1 microfaradio, 50V', 2, 0.12, true),
('C004', 'Capacitor 470uF', 'Capacitor electrolítico de 470 microfaradios, 25V', 2, 0.30, true),
('L003', 'LED Verde', 'Diodo LED de color verde, 5mm', 3, 0.06, true),
('L004', 'LED Amarillo', 'Diodo LED de color amarillo, 5mm', 3, 0.06, true),
('G003', 'Puerta NAND', 'Circuito integrado 7400, puerta lógica NAND', 4, 0.55, true),
('G004', 'Puerta NOR', 'Circuito integrado 7402, puerta lógica NOR', 4, 0.55, true),
('T003', 'Transistor MOSFET', 'Transistor MOSFET IRF540N', 5, 0.80, true),
('T004', 'Transistor BJT', 'Transistor BJT TIP31C', 5, 0.50, true),
-- Resistors (50 entries)
('R005', 'Resistor 330Ω', 'Resistor de 330 ohmios, 1/4W', 1, 0.10, true),
('R006', 'Resistor 470Ω', 'Resistor de 470 ohmios, 1/4W', 1, 0.10, true),
('R007', 'Resistor 1kΩ', 'Resistor de 1 kilo-ohmio, 1/2W', 1, 0.15, true),
('R008', 'Resistor 4.7kΩ', 'Resistor de 4.7 kilo-ohmios, 1/4W', 1, 0.10, true),
('R009', 'Resistor 47kΩ', 'Resistor de 47 kilo-ohmios, 1/4W', 1, 0.10, true),
('R010', 'Resistor 100kΩ', 'Resistor de 100 kilo-ohmios, 1/4W', 1, 0.10, true),
('R011', 'Resistor 1MΩ', 'Resistor de 1 mega-ohmio, 1/4W', 1, 0.10, true),
('R012', 'Resistor 10MΩ', 'Resistor de 10 mega-ohmios, 1/4W', 1, 0.15, true),
('R013', 'Resistor 0.1Ω', 'Resistor de 0.1 ohmios, 1W', 1, 0.20, true),
('R014', 'Resistor 0.47Ω', 'Resistor de 0.47 ohmios, 1W', 1, 0.20, true),
('R015', 'Resistor 2.2Ω', 'Resistor de 2.2 ohmios, 1/2W', 1, 0.15, true),
('R016', 'Resistor 3.3Ω', 'Resistor de 3.3 ohmios, 1/2W', 1, 0.15, true),
('R017', 'Resistor 5.6Ω', 'Resistor de 5.6 ohmios, 1/2W', 1, 0.15, true),
('R018', 'Resistor 8.2Ω', 'Resistor de 8.2 ohmios, 1/2W', 1, 0.15, true),
('R019', 'Resistor 12Ω', 'Resistor de 12 ohmios, 1/2W', 1, 0.15, true),
('R020', 'Resistor 15Ω', 'Resistor de 15 ohmios, 1/2W', 1, 0.15, true),
('R021', 'Resistor 18Ω', 'Resistor de 18 ohmios, 1/2W', 1, 0.15, true),
('R022', 'Resistor 22Ω', 'Resistor de 22 ohmios, 1/2W', 1, 0.15, true),
('R023', 'Resistor 27Ω', 'Resistor de 27 ohmios, 1/2W', 1, 0.15, true),
('R024', 'Resistor 33Ω', 'Resistor de 33 ohmios, 1/2W', 1, 0.15, true),
('R025', 'Resistor 39Ω', 'Resistor de 39 ohmios, 1/2W', 1, 0.15, true),
('R026', 'Resistor 47Ω', 'Resistor de 47 ohmios, 1/2W', 1, 0.15, true),
('R027', 'Resistor 56Ω', 'Resistor de 56 ohmios, 1/2W', 1, 0.15, true),
('R028', 'Resistor 68Ω', 'Resistor de 68 ohmios, 1/2W', 1, 0.15, true),
('R029', 'Resistor 75Ω', 'Resistor de 75 ohmios, 1/2W', 1, 0.15, true),
('R030', 'Resistor 82Ω', 'Resistor de 82 ohmios, 1/2W', 1, 0.15, true),
('R031', 'Resistor 91Ω', 'Resistor de 91 ohmios, 1/2W', 1, 0.15, true),
('R032', 'Resistor 120Ω', 'Resistor de 120 ohmios, 1/2W', 1, 0.15, true),
('R033', 'Resistor 150Ω', 'Resistor de 150 ohmios, 1/2W', 1, 0.15, true),
('R034', 'Resistor 180Ω', 'Resistor de 180 ohmios, 1/2W', 1, 0.15, true),
('R035', 'Resistor 200Ω', 'Resistor de 200 ohmios, 1/2W', 1, 0.15, true),
('R036', 'Resistor 240Ω', 'Resistor de 240 ohmios, 1/2W', 1, 0.15, true),
('R037', 'Resistor 270Ω', 'Resistor de 270 ohmios, 1/2W', 1, 0.15, true),
('R038', 'Resistor 300Ω', 'Resistor de 300 ohmios, 1/2W', 1, 0.15, true),
('R039', 'Resistor 330Ω', 'Resistor de 330 ohmios, 1/2W', 1, 0.15, true),
('R040', 'Resistor 390Ω', 'Resistor de 390 ohmios, 1/2W', 1, 0.15, true),
('R041', 'Resistor 430Ω', 'Resistor de 430 ohmios, 1/2W', 1, 0.15, true),
('R042', 'Resistor 470Ω', 'Resistor de 470 ohmios, 1/2W', 1, 0.15, true),
('R043', 'Resistor 510Ω', 'Resistor de 510 ohmios, 1/2W', 1, 0.15, true),
('R044', 'Resistor 560Ω', 'Resistor de 560 ohmios, 1/2W', 1, 0.15, true),
('R045', 'Resistor 620Ω', 'Resistor de 620 ohmios, 1/2W', 1, 0.15, true),
('R046', 'Resistor 680Ω', 'Resistor de 680 ohmios, 1/2W', 1, 0.15, true),
('R047', 'Resistor 750Ω', 'Resistor de 750 ohmios, 1/2W', 1, 0.15, true),
('R048', 'Resistor 820Ω', 'Resistor de 820 ohmios, 1/2W', 1, 0.15, true),
('R049', 'Resistor 910Ω', 'Resistor de 910 ohmios, 1/2W', 1, 0.15, true),
('R050', 'Resistor 1kΩ', 'Resistor de 1 kilo-ohmio, 1W', 1, 0.25, true),

-- Capacitors (50 entries)
('C005', 'Capacitor 0.1uF', 'Capacitor cerámico de 0.1 microfaradio, 50V', 2, 0.10, true),
('C006', 'Capacitor 0.22uF', 'Capacitor cerámico de 0.22 microfaradio, 50V', 2, 0.12, true),
('C007', 'Capacitor 0.47uF', 'Capacitor cerámico de 0.47 microfaradio, 50V', 2, 0.15, true),
('C008', 'Capacitor 1nF', 'Capacitor cerámico de 1 nanofaradio, 50V', 2, 0.08, true),
('C009', 'Capacitor 10nF', 'Capacitor cerámico de 10 nanofaradios, 50V', 2, 0.08, true),
('C010', 'Capacitor 100nF', 'Capacitor cerámico de 100 nanofaradios, 50V', 2, 0.10, true),
('C011', 'Capacitor 2.2uF', 'Capacitor electrolítico de 2.2 microfaradios, 25V', 2, 0.18, true),
('C012', 'Capacitor 4.7uF', 'Capacitor electrolítico de 4.7 microfaradios, 25V', 2, 0.20, true),
('C013', 'Capacitor 22uF', 'Capacitor electrolítico de 22 microfaradios, 25V', 2, 0.22, true),
('C014', 'Capacitor 33uF', 'Capacitor electrolítico de 33 microfaradios, 25V', 2, 0.25, true),
('C015', 'Capacitor 47uF', 'Capacitor electrolítico de 47 microfaradios, 25V', 2, 0.28, true),
('C016', 'Capacitor 68uF', 'Capacitor electrolítico de 68 microfaradios, 25V', 2, 0.30, true),
('C017', 'Capacitor 100uF', 'Capacitor electrolítico de 100 microfaradios, 50V', 2, 0.35, true),
('C018', 'Capacitor 220uF', 'Capacitor electrolítico de 220 microfaradios, 50V', 2, 0.40, true),
('C019', 'Capacitor 330uF', 'Capacitor electrolítico de 330 microfaradios, 50V', 2, 0.45, true),
('C020', 'Capacitor 470uF', 'Capacitor electrolítico de 470 microfaradios, 50V', 2, 0.50, true),
('C021', 'Capacitor 1000uF', 'Capacitor electrolítico de 1000 microfaradios, 25V', 2, 0.60, true),
('C022', 'Capacitor 2200uF', 'Capacitor electrolítico de 2200 microfaradios, 25V', 2, 0.80, true),
('C023', 'Capacitor 4700uF', 'Capacitor electrolítico de 4700 microfaradios, 25V', 2, 1.20, true),
('C024', 'Capacitor 10000uF', 'Capacitor electrolítico de 10000 microfaradios, 25V', 2, 2.00, true),
('C025', 'Capacitor 1uF', 'Capacitor de tantalio de 1 microfaradio, 35V', 2, 0.50, true),
('C026', 'Capacitor 2.2uF', 'Capacitor de tantalio de 2.2 microfaradios, 35V', 2, 0.60, true),
('C027', 'Capacitor 4.7uF', 'Capacitor de tantalio de 4.7 microfaradios, 35V', 2, 0.70, true),
('C028', 'Capacitor 10uF', 'Capacitor de tantalio de 10 microfaradios, 35V', 2, 0.90, true),
('C029', 'Capacitor 22uF', 'Capacitor de tantalio de 22 microfaradios, 35V', 2, 1.20, true),
('C030', 'Capacitor 47uF', 'Capacitor de tantalio de 47 microfaradios, 35V', 2, 1.50, true),
('C031', 'Capacitor 100uF', 'Capacitor de tantalio de 100 microfaradios, 35V', 2, 2.00, true),
('C032', 'Capacitor 220uF', 'Capacitor de tantalio de 220 microfaradios, 35V', 2, 2.50, true),
('C033', 'Capacitor 470uF', 'Capacitor de tantalio de 470 microfaradios, 35V', 2, 3.00, true),
('C034', 'Capacitor 1000uF', 'Capacitor de tantalio de 1000 microfaradios, 35V', 2, 4.00, true),
('C035', 'Capacitor 0.1uF', 'Capacitor de poliéster de 0.1 microfaradio, 100V', 2, 0.20, true),
('C036', 'Capacitor 0.22uF', 'Capacitor de poliéster de 0.22 microfaradio, 100V', 2, 0.25, true),
('C037', 'Capacitor 0.47uF', 'Capacitor de poliéster de 0.47 microfaradio, 100V', 2, 0.30, true),
('C038', 'Capacitor 1uF', 'Capacitor de poliéster de 1 microfaradio, 100V', 2, 0.40, true),
('C039', 'Capacitor 2.2uF', 'Capacitor de poliéster de 2.2 microfaradios, 100V', 2, 0.50, true),
('C040', 'Capacitor 4.7uF', 'Capacitor de poliéster de 4.7 microfaradios, 100V', 2, 0.60, true),
('C041', 'Capacitor 10uF', 'Capacitor de poliéster de 10 microfaradios, 100V', 2, 0.80, true),
('C042', 'Capacitor 22uF', 'Capacitor de poliéster de 22 microfaradios, 100V', 2, 1.00, true),
('C043', 'Capacitor 47uF', 'Capacitor de poliéster de 47 microfaradios, 100V', 2, 1.20, true),
('C044', 'Capacitor 100uF', 'Capacitor de poliéster de 100 microfaradios, 100V', 2, 1.50, true),
('C045', 'Capacitor 220uF', 'Capacitor de poliéster de 220 microfaradios, 100V', 2, 2.00, true),
('C046', 'Capacitor 470uF', 'Capacitor de poliéster de 470 microfaradios, 100V', 2, 2.50, true),
('C047', 'Capacitor 1000uF', 'Capacitor de poliéster de 1000 microfaradios, 100V', 2, 3.00, true),
('C048', 'Capacitor 2200uF', 'Capacitor de poliéster de 2200 microfaradios, 100V', 2, 4.00, true),
('C049', 'Capacitor 4700uF', 'Capacitor de poliéster de 4700 microfaradios, 100V', 2, 5.00, true),
('C050', 'Capacitor 10000uF', 'Capacitor de poliéster de 10000 microfaradios, 100V', 2, 7.00, true),

-- Diodos LED (30 entries)
('L005', 'LED Blanco', 'Diodo LED de color blanco, 5mm', 3, 0.10, true),
('L006', 'LED RGB', 'Diodo LED RGB, 5mm', 3, 0.25, true),
('L007', 'LED Infrarrojo', 'Diodo LED infrarrojo, 5mm', 3, 0.15, true),
('L008', 'LED UV', 'Diodo LED ultravioleta, 5mm', 3, 0.30, true),
('L009', 'LED Rojo', 'Diodo LED de color rojo, 3mm', 3, 0.05, true),
('L010', 'LED Verde', 'Diodo LED de color verde, 3mm', 3, 0.06, true),
('L011', 'LED Azul', 'Diodo LED de color azul, 3mm', 3, 0.07, true),
('L012', 'LED Amarillo', 'Diodo LED de color amarillo, 3mm', 3, 0.06, true),
('L013', 'LED Blanco', 'Diodo LED de color blanco, 3mm', 3, 0.10, true),
('L014', 'LED RGB', 'Diodo LED RGB, 3mm', 3, 0.25, true),
('L015', 'LED Rojo', 'Diodo LED de color rojo, 10mm', 3, 0.15, true),
('L016', 'LED Verde', 'Diodo LED de color verde, 10mm', 3, 0.18, true),
('L017', 'LED Azul', 'Diodo LED de color azul, 10mm', 3, 0.20, true),
('L018', 'LED Amarillo', 'Diodo LED de color amarillo, 10mm', 3, 0.18, true),
('L019', 'LED Blanco', 'Diodo LED de color blanco, 10mm', 3, 0.25, true),
('L020', 'LED RGB', 'Diodo LED RGB, 10mm', 3, 0.50, true),
('L021', 'LED Rojo Alto Brillo', 'Diodo LED de color rojo alto brillo, 5mm', 3, 0.20, true),
('L022', 'LED Verde Alto Brillo', 'Diodo LED de color verde alto brillo, 5mm', 3, 0.22, true),
('L023', 'LED Azul Alto Brillo', 'Diodo LED de color azul alto brillo, 5mm', 3, 0.25, true),
('L024', 'LED Blanco Alto Brillo', 'Diodo LED de color blanco alto brillo, 5mm', 3, 0.30, true),
('L025', 'LED RGB Alto Brillo', 'Diodo LED RGB alto brillo, 5mm', 3, 0.60, true),
('L026', 'LED Rojo SMD', 'Diodo LED de color rojo, SMD 0805', 3, 0.08, true),
('L027', 'LED Verde SMD', 'Diodo LED de color verde, SMD 0805', 3, 0.09, true),
('L028', 'LED Azul SMD', 'Diodo LED de color azul, SMD 0805', 3, 0.10, true),
('L029', 'LED Blanco SMD', 'Diodo LED de color blanco, SMD 0805', 3, 0.15, true),
('L030', 'LED RGB SMD', 'Diodo LED RGB, SMD 5050', 3, 0.30, true),
('L031', 'LED Rojo SMD', 'Diodo LED de color rojo, SMD 1206', 3, 0.08, true),
('L032', 'LED Verde SMD', 'Diodo LED de color verde, SMD 1206', 3, 0.09, true),
('L033', 'LED Azul SMD', 'Diodo LED de color azul, SMD 1206', 3, 0.10, true),
('L034', 'LED Blanco SMD', 'Diodo LED de color blanco, SMD 1206', 3, 0.15, true),

-- Puertas lógicas (20 entries)
('G005', 'Puerta NOT', 'Circuito integrado 7404, puerta lógica NOT', 4, 0.55, true),
('G006', 'Puerta XOR', 'Circuito integrado 7486, puerta lógica XOR', 4, 0.60, true),
('G007', 'Puerta XNOR', 'Circuito integrado 747266, puerta lógica XNOR', 4, 0.65, true),
('G008', 'Buffer', 'Circuito integrado 7407, buffer', 4, 0.50, true),
('G009', 'Flip-Flop D', 'Circuito integrado 7474, flip-flop D', 4, 0.70, true),
('G010', 'Flip-Flop JK', 'Circuito integrado 7476, flip-flop JK', 4, 0.75, true),
('G011', 'Contador 4 bits', 'Circuito integrado 7493, contador 4 bits', 4, 0.80, true),
('G012', 'Decodificador BCD', 'Circuito integrado 7447, decodificador BCD a 7 segmentos', 4, 0.85, true),
('G013', 'Multiplexor 8:1', 'Circuito integrado 74151, multiplexor 8:1', 4, 0.90, true),
('G014', 'Demultiplexor 1:8', 'Circuito integrado 74138, demultiplexor 1:8', 4, 0.90, true),
('G015', 'Sumador completo', 'Circuito integrado 7483, sumador completo 4 bits', 4, 0.95, true),
('G016', 'Comparador 4 bits', 'Circuito integrado 7485, comparador 4 bits', 4, 0.95, true),
('G017', 'Registro desplazamiento', 'Circuito integrado 74194, registro desplazamiento 4 bits', 4, 1.00, true),
('G018', 'Latch 8 bits', 'Circuito integrado 74373, latch 8 bits', 4, 1.10, true),
('G019', 'Buffer 8 bits', 'Circuito integrado 74244, buffer 8 bits', 4, 1.10, true),
('G020', 'Transceptor 8 bits', 'Circuito integrado 74245, transceptor 8 bits', 4, 1.20, true),
('G021', 'Puerta NAND', 'Circuito integrado 4011, puerta lógica NAND CMOS', 4, 0.60, true),
('G022', 'Puerta NOR', 'Circuito integrado 4001, puerta lógica NOR CMOS', 4, 0.60, true),
('G023', 'Puerta AND', 'Circuito integrado 4081, puerta lógica AND CMOS', 4, 0.60, true),
('G024', 'Puerta OR', 'Circuito integrado 4071, puerta lógica OR CMOS', 4, 0.60, true),

-- Transistores (30 entries)
('T005', 'Transistor NPN', 'Transistor NPN BC547', 5, 0.15, true),
('T006', 'Transistor PNP', 'Transistor PNP BC557', 5, 0.15, true),
('T007', 'Transistor NPN', 'Transistor NPN 2N3904', 5, 0.18, true),
('T008', 'Transistor PNP', 'Transistor PNP 2N3906', 5, 0.18, true),
('T009', 'Transistor Darlington', 'Transistor Darlington NPN TIP120', 5, 0.60, true),
('T010', 'Transistor Darlington', 'Transistor Darlington PNP TIP125', 5, 0.60, true),
('T011', 'Transistor MOSFET', 'Transistor MOSFET N-Channel IRFZ44N', 5, 0.75, true),
('T012', 'Transistor MOSFET', 'Transistor MOSFET P-Channel IRF9Z34N', 5, 0.85, true),
('T013', 'Transistor MOSFET', 'Transistor MOSFET N-Channel IRLZ44N', 5, 0.80, true),
('T014', 'Transistor MOSFET', 'Transistor MOSFET N-Channel IRF540N', 5, 0.90, true),
('T015', 'Transistor MOSFET', 'Transistor MOSFET P-Channel IRF9540N', 5, 1.00, true),
('T016', 'Transistor JFET', 'Transistor JFET N-Channel 2N3819', 5, 0.50, true),
('T017', 'Transistor JFET', 'Transistor JFET P-Channel 2N5460', 5, 0.55, true),
('T018', 'Transistor UJT', 'Transistor UJT 2N2646', 5, 0.65, true),
('T019', 'Transistor NPN', 'Transistor NPN BD139', 5, 0.40, true),
('T020', 'Transistor PNP', 'Transistor PNP BD140', 5, 0.40, true),
('T021', 'Transistor NPN', 'Transistor NPN TIP31C', 5, 0.50, true),
('T022', 'Transistor PNP', 'Transistor PNP TIP32C', 5, 0.50, true),
('T023', 'Transistor NPN', 'Transistor NPN MJE3055T', 5, 0.60, true),
('T024', 'Transistor PNP', 'Transistor PNP MJE2955T', 5, 0.60, true),
('T025', 'Transistor NPN', 'Transistor NPN 2SC5200', 5, 0.80, true),
('T026', 'Transistor PNP', 'Transistor PNP 2SA1943', 5, 0.80, true),
('T027', 'Transistor NPN', 'Transistor NPN D882', 5, 0.30, true),
('T028', 'Transistor PNP', 'Transistor PNP B772', 5, 0.30, true),
('T029', 'Transistor NPN', 'Transistor NPN C945', 5, 0.15, true),
('T030', 'Transistor PNP', 'Transistor PNP A733', 5, 0.15, true),
('T031', 'Transistor NPN', 'Transistor NPN S8050', 5, 0.12, true),
('T032', 'Transistor PNP', 'Transistor PNP S8550', 5, 0.12, true),
('T033', 'Transistor NPN', 'Transistor NPN BC548', 5, 0.15, true),
('T034', 'Transistor PNP', 'Transistor PNP BC558', 5, 0.15, true),

-- Microcontroladores (20 entries)
('M001', 'Microcontrolador', 'Microcontrolador PIC16F84A', 6, 3.50, true),
('M002', 'Microcontrolador', 'Microcontrolador PIC16F877A', 6, 5.00, true),
('M003', 'Microcontrolador', 'Microcontrolador PIC18F4550', 6, 6.50, true),
('M004', 'Microcontrolador', 'Microcontrolador ATmega328P', 6, 4.00, true),
('M005', 'Microcontrolador', 'Microcontrolador ATmega2560', 6, 8.00, true),
('M006', 'Microcontrolador', 'Microcontrolador ATtiny85', 6, 2.50, true),
('M007', 'Microcontrolador', 'Microcontrolador STM32F103C8T6', 6, 5.50, true),
('M008', 'Microcontrolador', 'Microcontrolador ESP8266', 6, 4.50, true),
('M009', 'Microcontrolador', 'Microcontrolador ESP32', 6, 7.00, true),
('M010', 'Microcontrolador', 'Microcontrolador 8051', 6, 3.00, true),
('M011', 'Microcontrolador', 'Microcontrolador PIC12F675', 6, 2.50, true),
('M012', 'Microcontrolador', 'Microcontrolador PIC10F200', 6, 2.00, true),
('M013', 'Microcontrolador', 'Microcontrolador ATmega8', 6, 3.50, true),
('M014', 'Microcontrolador', 'Microcontrolador ATmega16', 6, 4.50, true),
('M015', 'Microcontrolador', 'Microcontrolador ATmega32', 6, 5.00, true),
('M016', 'Microcontrolador', 'Microcontrolador STM8S103F3', 6, 2.50, true),
('M017', 'Microcontrolador', 'Microcontrolador STM32F030C6T6', 6, 4.00, true),
('M018', 'Microcontrolador', 'Microcontrolador STM32F401CCU6', 6, 6.00, true),
('M019', 'Microcontrolador', 'Microcontrolador STM32F407VET6', 6, 8.00, true),
('M020', 'Microcontrolador', 'Microcontrolador STM32F746NGH6', 6, 12.00, true),

-- Sensores (30 entries)
('S001', 'Sensor temperatura', 'Sensor de temperatura LM35', 7, 1.50, true),
('S002', 'Sensor humedad', 'Sensor de humedad DHT11', 7, 3.00, true),
('S003', 'Sensor humedad/temp', 'Sensor de humedad y temperatura DHT22', 7, 5.00, true),
('S004', 'Sensor ultrasonico', 'Sensor ultrasónico HC-SR04', 7, 2.50, true),
('S005', 'Sensor PIR', 'Sensor de movimiento PIR HC-SR501', 7, 3.50, true),
('S006', 'Sensor gas MQ-2', 'Sensor de gas inflamable MQ-2', 7, 4.00, true),
('S007', 'Sensor gas MQ-3', 'Sensor de alcohol MQ-3', 7, 4.00, true),
('S008', 'Sensor gas MQ-4', 'Sensor de gas natural MQ-4', 7, 4.00, true),
('S009', 'Sensor gas MQ-5', 'Sensor de gas LPG MQ-5', 7, 4.00, true),
('S010', 'Sensor gas MQ-6', 'Sensor de gas butano/propano MQ-6', 7, 4.00, true),
('S011', 'Sensor gas MQ-7', 'Sensor de monóxido de carbono MQ-7', 7, 4.00, true),
('S012', 'Sensor gas MQ-8', 'Sensor de hidrógeno MQ-8', 7, 4.00, true),
('S013', 'Sensor gas MQ-9', 'Sensor de monóxido de carbono/gas inflamable MQ-9', 7, 4.50, true),
('S014', 'Sensor gas MQ-135', 'Sensor de calidad de aire MQ-135', 7, 5.00, true),
('S015', 'Sensor humedad suelo', 'Sensor de humedad del suelo', 7, 2.00, true),
('S016', 'Sensor lluvia', 'Sensor de lluvia', 7, 1.50, true),
('S017', 'Sensor luz', 'Sensor de luz LDR', 7, 0.50, true),
('S018', 'Sensor color', 'Sensor de color TCS3200', 7, 6.00, true),
('S019', 'Sensor infrarrojo', 'Sensor infrarrojo TCRT5000', 7, 0.80, true),
('S020', 'Sensor efecto Hall', 'Sensor de efecto Hall A3144', 7, 1.00, true),
('S021', 'Sensor acelerómetro', 'Acelerómetro MPU6050', 7, 5.00, true),
('S022', 'Sensor presión', 'Sensor de presión BMP180', 7, 6.00, true),
('S023', 'Sensor presión', 'Sensor de presión BMP280', 7, 7.00, true),
('S024', 'Sensor huella digital', 'Sensor de huella digital R305', 7, 15.00, true),
('S025', 'Sensor RFID', 'Módulo RFID RC522', 7, 8.00, true),
('S026', 'Sensor corriente', 'Sensor de corriente ACS712 5A', 7, 4.00, true),
('S027', 'Sensor corriente', 'Sensor de corriente ACS712 20A', 7, 5.00, true),
('S028', 'Sensor corriente', 'Sensor de corriente ACS712 30A', 7, 6.00, true),
('S029', 'Sensor voltaje', 'Sensor de voltaje ZMPT101B', 7, 5.00, true),
('S030', 'Sensor nivel agua', 'Sensor de nivel de agua', 7, 2.00, true),

-- Relés (10 datos)
('RE001', 'Relé 5V', 'Relé electromecánico 5V 10A', 8, 1.50, true),
('RE002', 'Relé 12V', 'Relé electromecánico 12V 10A', 8, 1.60, true),
('RE003', 'Relé 24V', 'Relé electromecánico 24V 10A', 8, 1.70, true),
('RE004', 'Relé 5V', 'Relé de estado sólido 5V 2A', 8, 3.00, true),
('RE005', 'Relé 12V', 'Relé de estado sólido 12V 2A', 8, 3.20, true),
('RE006', 'Relé 24V', 'Relé de estado sólido 24V 2A', 8, 3.50, true),
('RE007', 'Módulo relé 1 canal', 'Módulo relé 1 canal 5V', 8, 2.50, true),
('RE008', 'Módulo relé 2 canales', 'Módulo relé 2 canales 5V', 8, 4.00, true),
('RE009', 'Módulo relé 4 canales', 'Módulo relé 4 canales 5V', 8, 6.00, true),
('RE010', 'Módulo relé 8 canales', 'Módulo relé 8 canales 5V', 8, 10.00, true),

-- Cristales osciladores (10 entries)
('CO001', 'Cristal 4MHz', 'Cristal oscilador 4MHz', 9, 0.50, true),
('CO002', 'Cristal 8MHz', 'Cristal oscilador 8MHz', 9, 0.55, true),
('CO003', 'Cristal 12MHz', 'Cristal oscilador 12MHz', 9, 0.60, true),
('CO004', 'Cristal 16MHz', 'Cristal oscilador 16MHz', 9, 0.65, true),
('CO005', 'Cristal 20MHz', 'Cristal oscilador 20MHz', 9, 0.70, true),
('CO006', 'Oscilador 4MHz', 'Oscilador completo 4MHz', 9, 1.50, true),
('CO007', 'Oscilador 8MHz', 'Oscilador completo 8MHz', 9, 1.60, true),
('CO008', 'Oscilador 12MHz', 'Oscilador completo 12MHz', 9, 1.70, true),
('CO009', 'Oscilador 16MHz', 'Oscilador completo 16MHz', 9, 1.80, true),
('CO010', 'Oscilador 20MHz', 'Oscilador completo 20MHz', 9, 1.90, true),

-- Conectores (30 entries)
('CN001', 'Conector hembra', 'Conector hembra 2.54mm 1x1', 10, 0.10, true),
('CN002', 'Conector macho', 'Conector macho 2.54mm 1x1', 10, 0.10, true),
('CN003', 'Conector hembra', 'Conector hembra 2.54mm 1x2', 10, 0.15, true),
('CN004', 'Conector macho', 'Conector macho 2.54mm 1x2', 10, 0.15, true),
('CN005', 'Conector hembra', 'Conector hembra 2.54mm 1x3', 10, 0.20, true),
('CN006', 'Conector macho', 'Conector macho 2.54mm 1x3', 10, 0.20, true),
('CN007', 'Conector hembra', 'Conector hembra 2.54mm 1x4', 10, 0.25, true),
('CN008', 'Conector macho', 'Conector macho 2.54mm 1x4', 10, 0.25, true),
('CN009', 'Conector hembra', 'Conector hembra 2.54mm 1x5', 10, 0.30, true),
('CN010', 'Conector macho', 'Conector macho 2.54mm 1x5', 10, 0.30, true),
('CN011', 'Conector hembra', 'Conector hembra 2.54mm 1x6', 10, 0.35, true),
('CN012', 'Conector macho', 'Conector macho 2.54mm 1x6', 10, 0.35, true),
('CN013', 'Conector hembra', 'Conector hembra 2.54mm 1x8', 10, 0.45, true),
('CN014', 'Conector macho', 'Conector macho 2.54mm 1x8', 10, 0.45, true),
('CN015', 'Conector hembra', 'Conector hembra 2.54mm 1x10', 10, 0.55, true),
('CN016', 'Conector macho', 'Conector macho 2.54mm 1x10', 10, 0.55, true),
('CN017', 'Conector hembra', 'Conector hembra 2.54mm 2x3', 10, 0.50, true),
('CN018', 'Conector macho', 'Conector macho 2.54mm 2x3', 10, 0.50, true),
('CN019', 'Conector hembra', 'Conector hembra 2.54mm 2x4', 10, 0.60, true),
('CN020', 'Conector macho', 'Conector macho 2.54mm 2x4', 10, 0.60, true),
('CN021', 'Conector hembra', 'Conector hembra 2.54mm 2x5', 10, 0.70, true),
('CN022', 'Conector macho', 'Conector macho 2.54mm 2x5', 10, 0.70, true),
('CN023', 'Conector USB-A', 'Conector USB tipo A hembra', 10, 0.80, true),
('CN024', 'Conector USB-B', 'Conector USB tipo B hembra', 10, 0.85, true),
('CN025', 'Conector micro USB', 'Conector micro USB hembra', 10, 0.90, true),
('CN026', 'Conector mini USB', 'Conector mini USB hembra', 10, 0.85, true),
('CN027', 'Conector HDMI', 'Conector HDMI tipo A hembra', 10, 1.50, true),
('CN028', 'Conector RJ45', 'Conector RJ45 hembra', 10, 1.20, true),
('CN029', 'Conector jack 3.5mm', 'Conector jack audio 3.5mm hembra', 10, 0.70, true),
('CN030', 'Conector DC', 'Conector de alimentación DC 2.1mm hembra', 10, 0.60, true),

-- Inductores (10 entries)
('I001', 'Inductor 10uH', 'Inductor 10 microhenrios', 11, 0.30, true),
('I002', 'Inductor 100uH', 'Inductor 100 microhenrios', 11, 0.35, true),
('I003', 'Inductor 1mH', 'Inductor 1 milihenrio', 11, 0.40, true),
('I004', 'Inductor 10mH', 'Inductor 10 milihenrios', 11, 0.50, true),
('I005', 'Inductor 100mH', 'Inductor 100 milihenrios', 11, 0.70, true),
('I006', 'Inductor 1H', 'Inductor 1 henrio', 11, 1.50, true),
('I007', 'Bobina', 'Bobina de ferrita', 11, 0.25, true),
('I008', 'Transformador', 'Transformador 220V a 12V 1A', 12, 3.00, true),
('I009', 'Transformador', 'Transformador 220V a 5V 1A', 12, 3.00, true),
('I010', 'Transformador', 'Transformador 220V a 9V 1A', 12, 3.00, true),

-- Reguladores de voltaje (10 entries)
('RV001', 'Regulador 5V', 'Regulador de voltaje 7805 5V 1A', 13, 0.50, true),
('RV002', 'Regulador 9V', 'Regulador de voltaje 7809 9V 1A', 13, 0.55, true),
('RV003', 'Regulador 12V', 'Regulador de voltaje 7812 12V 1A', 13, 0.60, true),
('RV004', 'Regulador 15V', 'Regulador de voltaje 7815 15V 1A', 13, 0.65, true),
('RV005', 'Regulador 3.3V', 'Regulador de voltaje LD1117V33 3.3V 800mA', 13, 0.70, true),
('RV006', 'Regulador 5V', 'Regulador de voltaje LM2940 5V 1A', 13, 0.80, true),
('RV007', 'Regulador 12V', 'Regulador de voltaje LM2940 12V 1A', 13, 0.85, true),
('RV008', 'Regulador ajustable', 'Regulador de voltaje ajustable LM317', 13, 0.90, true),
('RV009', 'Regulador negativo', 'Regulador de voltaje negativo 7905 -5V 1A', 13, 0.60, true),
('RV010', 'Regulador negativo', 'Regulador de voltaje negativo 7912 -12V 1A', 13, 0.70, true),

-- Fusibles (5 entries)
('F001', 'Fusible 1A', 'Fusible de vidrio 1A', 14, 0.20, true),
('F002', 'Fusible 2A', 'Fusible de vidrio 2A', 14, 0.20, true),
('F003', 'Fusible 5A', 'Fusible de vidrio 5A', 14, 0.25, true),
('F004', 'Fusible 10A', 'Fusible de vidrio 10A', 14, 0.30, true),
('F005', 'Fusible 15A', 'Fusible de vidrio 15A', 14, 0.35, true),

-- Interruptores (10 entries)
('SW001', 'Interruptor', 'Interruptor deslizante SPDT', 15, 0.50, true),
('SW002', 'Interruptor', 'Interruptor deslizante DPDT', 15, 0.70, true),
('SW003', 'Interruptor pulsador', 'Interruptor pulsador NO 6x6mm', 15, 0.30, true),
('SW004', 'Interruptor pulsador', 'Interruptor pulsador NC 6x6mm', 15, 0.30, true),
('SW005', 'Interruptor palanca', 'Interruptor de palanca SPDT', 15, 0.80, true),
('SW006', 'Interruptor palanca', 'Interruptor de palanca DPDT', 15, 1.00, true),
('SW007', 'Interruptor rotativo', 'Interruptor rotativo 1 polo 12 posiciones', 15, 1.50, true),
('SW008', 'Interruptor rotativo', 'Interruptor rotativo 2 polos 6 posiciones', 15, 2.00, true),
('SW009', 'Interruptor DIP', 'Interruptor DIP 4 posiciones', 15, 0.60, true),
('SW010', 'Interruptor DIP', 'Interruptor DIP 8 posiciones', 15, 1.00, true),

-- Potenciómetros (10 entries)
('P001', 'Potenciómetro', 'Potenciómetro lineal 10kΩ', 16, 0.80, true),
('P002', 'Potenciómetro', 'Potenciómetro lineal 50kΩ', 16, 0.85, true),
('P003', 'Potenciómetro', 'Potenciómetro lineal 100kΩ', 16, 0.90, true),
('P004', 'Potenciómetro', 'Potenciómetro logarítmico 10kΩ', 16, 0.90, true),
('P005', 'Potenciómetro', 'Potenciómetro logarítmico 50kΩ', 16, 0.95, true),
('P006', 'Potenciómetro', 'Potenciómetro logarítmico 100kΩ', 16, 1.00, true),
('P007', 'Potenciómetro', 'Potenciómetro multivuelta 10kΩ', 16, 2.50, true),
('P008', 'Potenciómetro', 'Potenciómetro multivuelta 100kΩ', 16, 2.70, true),
('P009', 'Potenciómetro', 'Potenciómetro ajustable 10kΩ', 16, 0.50, true),
('P010', 'Potenciómetro', 'Potenciómetro ajustable 100kΩ', 16, 0.55, true),

-- Displays LCD (10 entries)
('D001', 'Display LCD', 'Display LCD 16x2 caracteres', 17, 5.00, true),
('D002', 'Display LCD', 'Display LCD 20x4 caracteres', 17, 8.00, true),
('D003', 'Display OLED', 'Display OLED 0.96" 128x64', 17, 10.00, true),
('D004', 'Display OLED', 'Display OLED 1.3" 128x64', 17, 12.00, true),
('D005', 'Display 7 segmentos', 'Display 7 segmentos 1 dígito', 17, 1.00, true),
('D006', 'Display 7 segmentos', 'Display 7 segmentos 4 dígitos', 17, 3.00, true),
('D007', 'Display LED', 'Display LED matricial 8x8', 17, 4.00, true),
('D008', 'Display TFT', 'Display TFT 1.8" 128x160', 17, 15.00, true),
('D009', 'Display TFT', 'Display TFT 2.4" 240x320', 17, 20.00, true),
('D010', 'Display ePaper', 'Display ePaper 2.9" 296x128', 17, 25.00, true),

-- Zócalos IC (10 entries)
('Z001', 'Zócalo IC', 'Zócalo DIP-8', 18, 0.20, true),
('Z002', 'Zócalo IC', 'Zócalo DIP-14', 18, 0.25, true),
('Z003', 'Zócalo IC', 'Zócalo DIP-16', 18, 0.30, true),
('Z004', 'Zócalo IC', 'Zócalo DIP-18', 18, 0.35, true),
('Z005', 'Zócalo IC', 'Zócalo DIP-20', 18, 0.40, true),
('Z006', 'Zócalo IC', 'Zócalo DIP-28', 18, 0.60, true),
('Z007', 'Zócalo IC', 'Zócalo DIP-40', 18, 0.80, true),
('Z008', 'Zócalo IC', 'Zócalo PLCC-28', 18, 1.50, true),
('Z009', 'Zócalo IC', 'Zócalo PLCC-44', 18, 2.00, true),
('Z010', 'Zócalo IC', 'Zócalo PLCC-68', 18, 3.00, true),

-- Ventiladores (5 entries)
('V001', 'Ventilador', 'Ventilador DC 5V 40x40mm', 19, 3.00, true),
('V002', 'Ventilador', 'Ventilador DC 12V 40x40mm', 19, 3.50, true),
('V003', 'Ventilador', 'Ventilador DC 12V 60x60mm', 19, 4.50, true),
('V004', 'Ventilador', 'Ventilador DC 12V 80x80mm', 19, 5.50, true),
('V005', 'Ventilador', 'Ventilador DC 12V 120x120mm', 19, 8.00, true),

-- Disipadores de calor (5 entries)
('DH001', 'Disipador', 'Disipador de calor para TO-220', 20, 0.50, true),
('DH002', 'Disipador', 'Disipador de calor para TO-247', 20, 0.80, true),
('DH003', 'Disipador', 'Disipador de calor para TO-3', 20, 1.50, true),
('DH004', 'Disipador', 'Disipador de calor para chipset', 20, 1.00, true),
('DH005', 'Disipador', 'Disipador de calor para RAM', 20, 2.00, true),

-- Baterías (10 entries)
('B001', 'Batería', 'Batería 9V alcalina', 21, 2.50, true),
('B002', 'Batería', 'Batería AA 1.5V alcalina', 21, 1.00, true),
('B003', 'Batería', 'Batería AAA 1.5V alcalina', 21, 0.80, true),
('B004', 'Batería', 'Batería CR2032 3V', 21, 0.50, true),
('B005', 'Batería', 'Batería 18650 3.7V Li-ion', 21, 5.00, true),
('B006', 'Batería', 'Batería 14500 3.7V Li-ion', 21, 4.00, true),
('B007', 'Batería', 'Batería 26650 3.7V Li-ion', 21, 7.00, true),
('B008', 'Batería', 'Batería LiPo 3.7V 1000mAh', 21, 8.00, true),
('B009', 'Batería', 'Batería LiPo 7.4V 2000mAh', 21, 15.00, true),
('B010', 'Batería', 'Batería LiPo 11.1V 2200mAh', 21, 25.00, true),

-- Convertidores DC-DC (10 entries)
('DC001', 'Convertidor DC-DC', 'Convertidor DC-DC step-down LM2596', 22, 2.50, true),
('DC002', 'Convertidor DC-DC', 'Convertidor DC-DC step-up MT3608', 22, 2.00, true),
('DC003', 'Convertidor DC-DC', 'Convertidor DC-DC buck-boost', 22, 3.50, true),
('DC004', 'Convertidor DC-DC', 'Convertidor DC-DC step-down XL4015', 22, 3.00, true),
('DC005', 'Convertidor DC-DC', 'Convertidor DC-DC step-down MP1584', 22, 2.80, true),
('DC006', 'Convertidor DC-DC', 'Convertidor DC-DC step-down LM317', 22, 1.50, true),
('DC007', 'Convertidor DC-DC', 'Convertidor DC-DC step-up XL6009', 22, 2.50, true),
('DC008', 'Convertidor DC-DC', 'Convertidor DC-DC step-up LM2577', 22, 3.00, true),
('DC009', 'Convertidor DC-DC', 'Convertidor DC-DC step-down LM2678', 22, 4.00, true),
('DC010', 'Convertidor DC-DC', 'Convertidor DC-DC step-up LM2587', 22, 4.50, true),

-- Optoacopladores (5 entries)
('OP001', 'Optoacoplador', 'Optoacoplador PC817', 23, 0.50, true),
('OP002', 'Optoacoplador', 'Optoacoplador 4N25', 23, 0.60, true),
('OP003', 'Optoacoplador', 'Optoacoplador 4N35', 23, 0.70, true),
('OP004', 'Optoacoplador', 'Optoacoplador MOC3021', 23, 0.80, true),
('OP005', 'Optoacoplador', 'Optoacoplador MOC3041', 23, 1.00, true),

-- Termistores (5 entries)
('TH001', 'Termistor', 'Termistor NTC 10kΩ', 24, 0.30, true),
('TH002', 'Termistor', 'Termistor NTC 100kΩ', 24, 0.35, true),
('TH003', 'Termistor', 'Termistor PTC 100Ω', 24, 0.40, true),
('TH004', 'Termistor', 'Termistor PTC 1kΩ', 24, 0.45, true),
('TH005', 'Termistor', 'Termistor NTC 1kΩ', 24, 0.30, true),

-- Varistores (5 entries)
('VA001', 'Varistor', 'Varistor 7mm 14V', 25, 0.40, true),
('VA002', 'Varistor', 'Varistor 7mm 18V', 25, 0.40, true),
('VA003', 'Varistor', 'Varistor 7mm 22V', 25, 0.40, true),
('VA004', 'Varistor', 'Varistor 10mm 275V', 25, 0.60, true),
('VA005', 'Varistor', 'Varistor 10mm 385V', 25, 0.60, true),

-- Memorias EEPROM (5 entries)
('ME001', 'EEPROM', 'EEPROM I2C 24C02 2Kbit', 26, 0.80, true),
('ME002', 'EEPROM', 'EEPROM I2C 24C04 4Kbit', 26, 0.90, true),
('ME003', 'EEPROM', 'EEPROM I2C 24C08 8Kbit', 26, 1.00, true),
('ME004', 'EEPROM', 'EEPROM I2C 24C16 16Kbit', 26, 1.20, true),
('ME005', 'EEPROM', 'EEPROM I2C 24C32 32Kbit', 26, 1.50, true),

-- Amplificadores operacionales (10 entries)
('AO001', 'Amplificador operacional', 'Amplificador operacional LM741', 27, 0.50, true),
('AO002', 'Amplificador operacional', 'Amplificador operacional LM358', 27, 0.60, true),
('AO003', 'Amplificador operacional', 'Amplificador operacional LM324', 27, 0.70, true),
('AO004', 'Amplificador operacional', 'Amplificador operacional TL072', 27, 0.80, true),
('AO005', 'Amplificador operacional', 'Amplificador operacional TL082', 27, 0.90, true),
('AO006', 'Amplificador operacional', 'Amplificador operacional NE5532', 27, 1.00, true),
('AO007', 'Amplificador operacional', 'Amplificador operacional OP07', 27, 1.20, true),
('AO008', 'Amplificador operacional', 'Amplificador operacional LM386', 27, 0.70, true),
('AO009', 'Amplificador operacional', 'Amplificador operacional TDA2030', 27, 1.50, true),
('AO010', 'Amplificador operacional', 'Amplificador operacional TDA2050', 27, 2.00, true),

-- Comparadores de voltaje (5 entries)
('CV001', 'Comparador de voltaje', 'Comparador de voltaje LM311', 28, 0.80, true),
('CV002', 'Comparador de voltaje', 'Comparador de voltaje LM339', 28, 0.90, true),
('CV003', 'Comparador de voltaje', 'Comparador de voltaje LM393', 28, 0.70, true),
('CV004', 'Comparador de voltaje', 'Comparador de voltaje MAX921', 28, 1.50, true),
('CV005', 'Comparador de voltaje', 'Comparador de voltaje MAX924', 28, 1.70, true),

-- Relojes en tiempo real (5 entries)
('RT001', 'RTC', 'Reloj en tiempo real DS1307', 29, 2.00, true),
('RT002', 'RTC', 'Reloj en tiempo real DS3231', 29, 3.00, true),
('RT003', 'RTC', 'Reloj en tiempo real PCF8563', 29, 2.50, true),
('RT004', 'RTC', 'Reloj en tiempo real MCP7940N', 29, 2.80, true),
('RT005', 'RTC', 'Reloj en tiempo real RX8025', 29, 3.50, true),

-- Módulos WiFi (5 entries)
('WF001', 'Módulo WiFi', 'Módulo WiFi ESP-01', 30, 4.00, true),
('WF002', 'Módulo WiFi', 'Módulo WiFi ESP8266-12E', 30, 5.00, true),
('WF003', 'Módulo WiFi', 'Módulo WiFi ESP32', 30, 8.00, true),
('WF004', 'Módulo WiFi', 'Módulo WiFi RN171', 30, 15.00, true),
('WF005', 'Módulo WiFi', 'Módulo WiFi RN2483', 30, 20.00, true);

INSERT INTO componentes (codigo_serie, nombre, descripcion, id_tipo_componente, precio, disponible) VALUES
-- Additional Resistors (10 entries)
('R051', 'Resistor 1.2kΩ', 'Resistor de 1.2 kilo-ohmios, 1/4W', 1, 0.10, true),
('R052', 'Resistor 2.2kΩ', 'Resistor de 2.2 kilo-ohmios, 1/4W', 1, 0.10, true),
('R053', 'Resistor 3.3kΩ', 'Resistor de 3.3 kilo-ohmios, 1/4W', 1, 0.10, true),
('R054', 'Resistor 5.6kΩ', 'Resistor de 5.6 kilo-ohmios, 1/4W', 1, 0.10, true),
('R055', 'Resistor 6.8kΩ', 'Resistor de 6.8 kilo-ohmios, 1/4W', 1, 0.10, true),
('R056', 'Resistor 8.2kΩ', 'Resistor de 8.2 kilo-ohmios, 1/4W', 1, 0.10, true),
('R057', 'Resistor 15kΩ', 'Resistor de 15 kilo-ohmios, 1/4W', 1, 0.10, true),
('R058', 'Resistor 22kΩ', 'Resistor de 22 kilo-ohmios, 1/4W', 1, 0.10, true),
('R059', 'Resistor 33kΩ', 'Resistor de 33 kilo-ohmios, 1/4W', 1, 0.10, true),
('R060', 'Resistor 47kΩ', 'Resistor de 47 kilo-ohmios, 1/2W', 1, 0.15, true),

-- Additional Capacitors (10 entries)
('C051', 'Capacitor 0.01uF', 'Capacitor cerámico de 0.01 microfaradio, 50V', 2, 0.08, true),
('C052', 'Capacitor 0.047uF', 'Capacitor cerámico de 0.047 microfaradio, 50V', 2, 0.09, true),
('C053', 'Capacitor 0.1uF', 'Capacitor cerámico de 0.1 microfaradio, 25V', 2, 0.10, true),
('C054', 'Capacitor 0.22uF', 'Capacitor cerámico de 0.22 microfaradio, 25V', 2, 0.12, true),
('C055', 'Capacitor 0.33uF', 'Capacitor cerámico de 0.33 microfaradio, 25V', 2, 0.14, true),
('C056', 'Capacitor 0.47uF', 'Capacitor cerámico de 0.47 microfaradio, 25V', 2, 0.15, true),
('C057', 'Capacitor 1uF', 'Capacitor cerámico de 1 microfaradio, 16V', 2, 0.18, true),
('C058', 'Capacitor 2.2uF', 'Capacitor cerámico de 2.2 microfaradios, 16V', 2, 0.20, true),
('C059', 'Capacitor 3.3uF', 'Capacitor cerámico de 3.3 microfaradios, 16V', 2, 0.22, true),
('C060', 'Capacitor 4.7uF', 'Capacitor cerámico de 4.7 microfaradios, 16V', 2, 0.25, true),

-- Additional LEDs (8 entries)
('L035', 'LED Rojo SMD', 'Diodo LED de color rojo, SMD 0603', 3, 0.07, true),
('L036', 'LED Verde SMD', 'Diodo LED de color verde, SMD 0603', 3, 0.08, true),
('L037', 'LED Azul SMD', 'Diodo LED de color azul, SMD 0603', 3, 0.09, true),
('L038', 'LED Blanco SMD', 'Diodo LED de color blanco, SMD 0603', 3, 0.12, true),
('L039', 'LED RGB SMD', 'Diodo LED RGB, SMD 3528', 3, 0.25, true),
('L040', 'LED IR SMD', 'Diodo LED infrarrojo, SMD 0805', 3, 0.15, true),
('L041', 'LED UV SMD', 'Diodo LED ultravioleta, SMD 0805', 3, 0.30, true),
('L042', 'LED Bi-color', 'Diodo LED bi-color rojo/verde, 5mm', 3, 0.15, true),

-- Additional Logic Gates (5 entries)
('G025', 'Puerta NAND', 'Circuito integrado 74HC00, puerta lógica NAND', 4, 0.60, true),
('G026', 'Puerta NOR', 'Circuito integrado 74HC02, puerta lógica NOR', 4, 0.60, true),
('G027', 'Puerta AND', 'Circuito integrado 74HC08, puerta lógica AND', 4, 0.60, true),
('G028', 'Puerta OR', 'Circuito integrado 74HC32, puerta lógica OR', 4, 0.60, true),
('G029', 'Puerta XOR', 'Circuito integrado 74HC86, puerta lógica XOR', 4, 0.65, true),

-- Additional Transistors (5 entries)
('T035', 'Transistor NPN', 'Transistor NPN BC549', 5, 0.15, true),
('T036', 'Transistor PNP', 'Transistor PNP BC559', 5, 0.15, true),
('T037', 'Transistor NPN', 'Transistor NPN BC547B', 5, 0.16, true),
('T038', 'Transistor PNP', 'Transistor PNP BC557B', 5, 0.16, true),
('T039', 'Transistor NPN', 'Transistor NPN BC548C', 5, 0.17, true),

-- Additional Microcontrollers (5 entries)
('M021', 'Microcontrolador', 'Microcontrolador ATtiny13', 6, 1.50, true),
('M022', 'Microcontrolador', 'Microcontrolador ATtiny2313', 6, 2.50, true),
('M023', 'Microcontrolador', 'Microcontrolador ATmega168', 6, 3.50, true),
('M024', 'Microcontrolador', 'Microcontrolador ATmega644', 6, 6.00, true),
('M025', 'Microcontrolador', 'Microcontrolador ATmega1284', 6, 8.00, true),

-- Additional Sensors (5 entries)
('S031', 'Sensor humedad', 'Sensor de humedad HIH-4000', 7, 4.50, true),
('S032', 'Sensor temperatura', 'Sensor de temperatura DS18B20', 7, 3.00, true),
('S033', 'Sensor presión', 'Sensor de presión BME280', 7, 8.00, true),
('S034', 'Sensor gas', 'Sensor de gas MQ-135', 7, 5.00, true),
('S035', 'Sensor proximidad', 'Sensor de proximidad HC-SR04', 7, 2.50, true),

-- Additional Relays (5 entries)
('RE011', 'Relé 5V', 'Relé electromecánico 5V 5A', 8, 1.20, true),
('RE012', 'Relé 12V', 'Relé electromecánico 12V 5A', 8, 1.30, true),
('RE013', 'Relé 24V', 'Relé electromecánico 24V 5A', 8, 1.40, true),
('RE014', 'Relé 5V', 'Relé de estado sólido 5V 1A', 8, 2.50, true),
('RE015', 'Relé 12V', 'Relé de estado sólido 12V 1A', 8, 2.70, true),

-- Additional Crystals (5 entries)
('CO011', 'Cristal 32.768kHz', 'Cristal oscilador 32.768kHz', 9, 0.60, true),
('CO012', 'Cristal 1MHz', 'Cristal oscilador 1MHz', 9, 0.45, true),
('CO013', 'Cristal 2MHz', 'Cristal oscilador 2MHz', 9, 0.50, true),
('CO014', 'Cristal 3.579545MHz', 'Cristal oscilador 3.579545MHz', 9, 0.55, true),
('CO015', 'Cristal 6MHz', 'Cristal oscilador 6MHz', 9, 0.60, true),

-- Additional Connectors (5 entries)
('CN031', 'Conector USB-C', 'Conector USB tipo C hembra', 10, 1.20, true),
('CN032', 'Conector HDMI mini', 'Conector HDMI mini hembra', 10, 1.80, true),
('CN033', 'Conector DisplayPort', 'Conector DisplayPort hembra', 10, 2.00, true),
('CN034', 'Conector VGA', 'Conector VGA hembra', 10, 1.50, true),
('CN035', 'Conector DVI', 'Conector DVI hembra', 10, 1.80, true);

INSERT INTO clientes (nombre, apellido, correo, fecha_registro, estado) VALUES
('Juan', 'Pérez', 'juan.perez@gmail.com', '2025-01-15 10:30:00', true),
('María', 'González', 'maria.gonzalez@gmail.com', '2025-02-20 14:45:00', true),
('Carlos', 'Ramírez', 'carlos.ramirez@gmail.com', '2025-03-10 09:20:00', true),
('Ana', 'López', 'ana.lopez@gmail.com', '2025-04-05 16:00:00', true),
('Luis', 'Martínez', 'luis.martinez@gmail.com', '2025-05-12 11:15:00', true),
('Pedro', 'Hernández', 'pedro.hernandez@gmail.com', '2025-06-10 10:00:00', true),
('Sofía', 'Castillo', 'sofia.castillo@gmail.com', '2025-06-15 11:30:00', true),
('Diego', 'Mendoza', 'diego.mendoza@gmail.com', '2025-06-20 14:00:00', true),
('Lucía', 'Reyes', 'lucia.reyes@gmail.com', '2025-06-25 15:45:00', true),
('Fernando', 'Ortiz', 'fernando.ortiz@gmail.com', '2025-07-01 09:15:00', true),
('Roberto', 'Guzmán', 'roberto.guzman@example.com', '2025-01-16 09:15:00', true),
('Lucía', 'Herrera', 'lucia.herrera@example.com', '2025-01-17 10:30:00', true),
('Fernando', 'Espinoza', 'fernando.espinoza@example.com', '2025-01-18 11:45:00', true),
('Patricia', 'Rivas', 'patricia.rivas@example.com', '2025-01-19 12:00:00', true),
('Jorge', 'Molina', 'jorge.molina@example.com', '2025-01-20 13:15:00', true),
('Gabriela', 'Salazar', 'gabriela.salazar@example.com', '2025-01-21 14:30:00', true),
('Ricardo', 'Vega', 'ricardo.vega@example.com', '2025-01-22 15:45:00', true),
('Sandra', 'Cervantes', 'sandra.cervantes@example.com', '2025-01-23 16:00:00', true),
('Héctor', 'Orozco', 'hector.orozco@example.com', '2025-01-24 09:15:00', true),
('Mariana', 'Pacheco', 'mariana.pacheco@example.com', '2025-01-25 10:30:00', true),
('Arturo', 'Lara', 'arturo.lara@example.com', '2025-01-26 11:45:00', true),
('Adriana', 'Miranda', 'adriana.miranda@example.com', '2025-01-27 12:00:00', true),
('Raúl', 'Campos', 'raul.campos@example.com', '2025-01-28 13:15:00', true),
('Claudia', 'Valenzuela', 'claudia.valenzuela@example.com', '2025-01-29 14:30:00', true),
('Francisco', 'Mejía', 'francisco.mejia@example.com', '2025-01-30 15:45:00', true),
('Verónica', 'Nava', 'veronica.nava@example.com', '2025-01-31 16:00:00', true),
('Daniel', 'Rosales', 'daniel.rosales@example.com', '2025-02-01 09:15:00', true),
('Alejandra', 'Delgado', 'alejandra.delgado@example.com', '2025-02-02 10:30:00', true),
('José', 'Cisneros', 'jose.cisneros@example.com', '2025-02-03 11:45:00', true),
('Teresa', 'Rangel', 'teresa.rangel@example.com', '2025-02-04 12:00:00', true),
('Miguel', 'Quintero', 'miguel.quintero@example.com', '2025-02-05 13:15:00', true),
('Diana', 'Estrada', 'diana.estrada@example.com', '2025-02-06 14:30:00', true),
('Javier', 'Galván', 'javier.galvan@example.com', '2025-02-07 15:45:00', true),
('Norma', 'Barajas', 'norma.barajas@example.com', '2025-02-08 16:00:00', true),
('Alberto', 'Castañeda', 'alberto.castaneda@example.com', '2025-02-09 09:15:00', true),
('Rosa', 'Maldonado', 'rosa.maldonado@example.com', '2025-02-10 10:30:00', true),
('Eduardo', 'Zúñiga', 'eduardo.zuniga@example.com', '2025-02-11 11:45:00', true),
('Lourdes', 'Olvera', 'lourdes.olvera@example.com', '2025-02-12 12:00:00', true),
('Guillermo', 'Jurado', 'guillermo.jurado@example.com', '2025-02-13 13:15:00', true),
('Alicia', 'Villanueva', 'alicia.villanueva@example.com', '2025-02-14 14:30:00', true),
('Sergio', 'Navarrete', 'sergio.navarrete@example.com', '2025-02-15 15:45:00', true),
('Mariana', 'Zamora', 'mariana.zamora@example.com', '2025-02-16 16:00:00', true),
('Rodrigo', 'Vallejo', 'rodrigo.vallejo@example.com', '2025-02-17 09:15:00', true),
('Isabel', 'Carrillo', 'isabel.carrillo@example.com', '2025-02-18 10:30:00', true),
('Enrique', 'Tapia', 'enrique.tapia@example.com', '2025-02-19 11:45:00', true),
('Beatriz', 'Medina', 'beatriz.medina@example.com', '2025-02-20 12:00:00', true),
('Felipe', 'Romo', 'felipe.romo@example.com', '2025-02-21 13:15:00', true),
('Diana', 'Salinas', 'diana.salinas@example.com', '2025-02-22 14:30:00', true),
('Manuel', 'Barrera', 'manuel.barrera@example.com', '2025-02-23 15:45:00', true),
('Norma', 'Cuevas', 'norma.cuevas@example.com', '2025-02-24 16:00:00', true),
('Oscar', 'Lozano', 'oscar.lozano@example.com', '2025-02-25 09:15:00', true),
('Claudia', 'Aguilera', 'claudia.aguilera@example.com', '2025-02-26 10:30:00', true),
('Héctor', 'Rocha', 'hector.rocha@example.com', '2025-02-27 11:45:00', true),
('Lucía', 'Montes', 'lucia.montes@example.com', '2025-02-28 12:00:00', true),
('Miguel', 'Cordero', 'miguel.cordero@example.com', '2025-03-01 13:15:00', true),
('Rosa', 'Varela', 'rosa.varela@example.com', '2025-03-02 14:30:00', true),
('Alberto', 'Zepeda', 'alberto.zepeda@example.com', '2025-03-03 15:45:00', true),
('Lourdes', 'Cervantes', 'lourdes.cervantes@example.com', '2025-03-04 16:00:00', true),
('Eduardo', 'Gallegos', 'eduardo.gallegos@example.com', '2025-03-05 09:15:00', true),
('Alicia', 'Velasco', 'alicia.velasco@example.com', '2025-03-06 10:30:00', true),
('Sergio', 'Márquez', 'sergio.marquez@example.com', '2025-03-07 11:45:00', true),
('Mariana', 'Franco', 'mariana.franco@example.com', '2025-03-08 12:00:00', true),
('Rodrigo', 'Santillán', 'rodrigo.santillan@example.com', '2025-03-09 13:15:00', true),
('Isabel', 'Téllez', 'isabel.tellez@example.com', '2025-03-10 14:30:00', true),
('Enrique', 'Ríos', 'enrique.rios@example.com', '2025-03-11 15:45:00', true),
('Beatriz', 'Del Valle', 'beatriz.delvalle@example.com', '2025-03-12 16:00:00', true),
('Felipe', 'Cabrera', 'felipe.cabrera@example.com', '2025-03-13 09:15:00', true),
('Diana', 'Mireles', 'diana.mireles@example.com', '2025-03-14 10:30:00', true),
('Manuel', 'Alcaraz', 'manuel.alcaraz@example.com', '2025-03-15 11:45:00', true),
('Norma', 'Ponce', 'norma.ponce@example.com', '2025-03-16 12:00:00', true),
('Oscar', 'Villagómez', 'oscar.villagomez@example.com', '2025-03-17 13:15:00', true),
('Claudia', 'Barrientos', 'claudia.barrientos@example.com', '2025-03-18 14:30:00', true),
('Héctor', 'Zaragoza', 'hector.zaragoza@example.com', '2025-03-19 15:45:00', true),
('Lucía', 'Castaño', 'lucia.castano@example.com', '2025-03-20 16:00:00', true),
('Miguel', 'Arredondo', 'miguel.arredondo@example.com', '2025-03-21 09:15:00', true),
('Rosa', 'Valdivia', 'rosa.valdivia@example.com', '2025-03-22 10:30:00', true),
('Alberto', 'Collado', 'alberto.collado@example.com', '2025-03-23 11:45:00', true),
('Lourdes', 'Rosado', 'lourdes.rosado@example.com', '2025-03-24 12:00:00', true),
('Eduardo', 'Solano', 'eduardo.solano@example.com', '2025-03-25 13:15:00', true),
('Alicia', 'Carrasco', 'alicia.carrasco@example.com', '2025-03-26 14:30:00', true),
('Sergio', 'Roldán', 'sergio.roldan@example.com', '2025-03-27 15:45:00', true),
('Mariana', 'Pineda', 'mariana.pineda@example.com', '2025-03-28 16:00:00', true),
('Rodrigo', 'Palomo', 'rodrigo.palomo@example.com', '2025-03-29 09:15:00', true),
('Isabel', 'Quesada', 'isabel.quesada@example.com', '2025-03-30 10:30:00', true),
('Enrique', 'Dueñas', 'enrique.duenas@example.com', '2025-03-31 11:45:00', true),
('Beatriz', 'Sotelo', 'beatriz.sotelo@example.com', '2025-04-01 12:00:00', true),
('Felipe', 'Cepeda', 'felipe.cepeda@example.com', '2025-04-02 13:15:00', true),
('Diana', 'Vela', 'diana.vela@example.com', '2025-04-03 14:30:00', true),
('Manuel', 'Zambrano', 'manuel.zambrano@example.com', '2025-04-04 15:45:00', true),
('Norma', 'Arteaga', 'norma.arteaga@example.com', '2025-04-05 16:00:00', true),
('Oscar', 'Castañón', 'oscar.castanon@example.com', '2025-04-06 09:15:00', true),
('Claudia', 'Barragán', 'claudia.barragan@example.com', '2025-04-07 10:30:00', true),
('Héctor', 'Coria', 'hector.coria@example.com', '2025-04-08 11:45:00', true),
('Lucía', 'Del Río', 'lucia.delrio@example.com', '2025-04-09 12:00:00', true),
('Miguel', 'Escamilla', 'miguel.escamilla@example.com', '2025-04-10 13:15:00', true),
('Rosa', 'Fierro', 'rosa.fierro@example.com', '2025-04-11 14:30:00', true),
('Alberto', 'Gámez', 'alberto.gamez@example.com', '2025-04-12 15:45:00', true),
('Lourdes', 'Hinojosa', 'lourdes.hinojosa@example.com', '2025-04-13 16:00:00', true),
('Eduardo', 'Jaramillo', 'eduardo.jaramillo@example.com', '2025-04-14 09:15:00', true),
('Alicia', 'Llamas', 'alicia.llamas@example.com', '2025-04-15 10:30:00', true),
('Sergio', 'Munguía', 'sergio.munguia@example.com', '2025-04-16 11:45:00', true),
('Mariana', 'Nieto', 'mariana.nieto@example.com', '2025-04-17 12:00:00', true),
('Rodrigo', 'Ocampo', 'rodrigo.ocampo@example.com', '2025-04-18 13:15:00', true),
('Isabel', 'Portillo', 'isabel.portillo@example.com', '2025-04-19 14:30:00', true),
('Enrique', 'Quiñones', 'enrique.quinones@example.com', '2025-04-20 15:45:00', true),
('Beatriz', 'Rentería', 'beatriz.renteria@example.com', '2025-04-21 16:00:00', true),
('Felipe', 'Sierra', 'felipe.sierra@example.com', '2025-04-22 09:15:00', true),
('Diana', 'Trujillo', 'diana.trujillo@example.com', '2025-04-23 10:30:00', true),
('Manuel', 'Uribe', 'manuel.uribe@example.com', '2025-04-24 11:45:00', true),
('Norma', 'Vázquez', 'norma.vazquez@example.com', '2025-04-25 12:00:00', true),
('Oscar', 'Yáñez', 'oscar.yanez@example.com', '2025-04-26 13:15:00', true),
('Claudia', 'Zúñiga', 'claudia.zuniga@example.com', '2025-04-27 14:30:00', true),
('Héctor', 'Alemán', 'hector.aleman@example.com', '2025-04-28 15:45:00', true),
('Lucía', 'Briseño', 'lucia.briseno@example.com', '2025-04-29 16:00:00', true),
('Miguel', 'Carrera', 'miguel.carrera@example.com', '2025-04-30 09:15:00', true);

INSERT INTO empleado (nombre, apellido, tipo_empleado, fecha_contratacion, estado) VALUES
('Carlos', 'García', 'administrador', '2020-01-15', true),
('María', 'López', 'administrador', '2020-02-20', true),
('Juan', 'Martínez', 'vendedor', '2020-03-10', true),
('Ana', 'Rodríguez', 'vendedor', '2020-04-05', true),
('Pedro', 'Hernández', 'vendedor', '2020-05-12', true),
('Laura', 'Gómez', 'vendedor', '2020-06-10', true),
('Luis', 'Pérez', 'vendedor', '2020-07-15', true),
('Sofía', 'Díaz', 'vendedor', '2020-08-20', true),
('Diego', 'Sánchez', 'vendedor', '2020-09-25', true),
('Elena', 'Ramírez', 'vendedor', '2020-10-30', true),
('Jorge', 'Flores', 'cajero', '2020-11-05', true),
('Carmen', 'Vargas', 'cajero', '2020-12-10', true),
('Ricardo', 'Castro', 'cajero', '2021-01-15', true),
('Patricia', 'Romero', 'cajero', '2021-02-20', true),
('Fernando', 'Álvarez', 'cajero', '2021-03-10', true),
('Adriana', 'Mendoza', 'bodeguero', '2021-04-05', true),
('Roberto', 'Guerrero', 'bodeguero', '2021-05-12', true),
('Gabriela', 'Ríos', 'bodeguero', '2021-06-10', true),
('Raúl', 'Ortega', 'bodeguero', '2021-07-15', true),
('Silvia', 'Delgado', 'bodeguero', '2021-08-20', true),
('José', 'Núñez', 'vendedor', '2021-09-25', false),
('Mónica', 'Jiménez', 'vendedor', '2021-10-30', false),
('Arturo', 'Ruiz', 'cajero', '2021-11-05', false),
('Verónica', 'Serrano', 'cajero', '2021-12-10', false),
('Francisco', 'Morales', 'bodeguero', '2022-01-15', false),
('Daniel', 'Ortiz', 'vendedor', '2022-02-20', true),
('Alejandra', 'Medina', 'vendedor', '2022-03-10', true),
('Javier', 'Aguilar', 'vendedor', '2022-04-05', true),
('Teresa', 'Cortés', 'cajero', '2022-05-12', true),
('Héctor', 'Moreno', 'cajero', '2022-06-10', true),
('Claudia', 'Castillo', 'bodeguero', '2022-07-15', true),
('Oscar', 'Reyes', 'bodeguero', '2022-08-20', true),
('Lucía', 'Peña', 'vendedor', '2022-09-25', true),
('Miguel', 'Navarro', 'vendedor', '2022-10-30', true),
('Rosa', 'Cruz', 'cajero', '2022-11-05', true),
('Alberto', 'Vega', 'cajero', '2022-12-10', true),
('Isabel', 'Campos', 'bodeguero', '2023-01-15', true),
('Enrique', 'Fuentes', 'bodeguero', '2023-02-20', true),
('Beatriz', 'Miranda', 'vendedor', '2023-03-10', true),
('Felipe', 'Ponce', 'vendedor', '2023-04-05', true),
('Diana', 'Santos', 'cajero', '2023-05-12', true),
('Manuel', 'Valdez', 'cajero', '2023-06-10', true),
('Norma', 'Espinoza', 'bodeguero', '2023-07-15', true),
('Rodrigo', 'Méndez', 'bodeguero', '2023-08-20', true),
('Alicia', 'Acosta', 'vendedor', '2023-09-25', true),
('Sergio', 'Padilla', 'vendedor', '2023-10-30', true),
('Mariana', 'Rosas', 'cajero', '2023-11-05', true),
('Guillermo', 'Lara', 'cajero', '2023-12-10', true),
('Lourdes', 'Juárez', 'bodeguero', '2024-01-15', true),
('Eduardo', 'Ibarra', 'bodeguero', '2024-02-20', true);

INSERT INTO proveedores (nombre, telefono, correo, direccion, estado) VALUES
('Electrónica Guatemala', '50212345678', 'contacto@electronicagt.com', 'Zona 1, Ciudad de Guatemala', true),
('Componentes Eléctricos', '50287654321', 'ventas@componenteselectricos.com', 'Zona 10, Ciudad de Guatemala', true),
('Distribuidora Tecno', '50211223344', 'info@distribuidoratecno.com', 'Zona 4, Ciudad de Guatemala', true),
('ElectroPartes', '50233445566', 'info@electropartes.com', 'Zona 7, Ciudad de Guatemala', true),
('TecnoDistribuidora', '50299887766', 'ventas@tecnodistribuidora.com', 'Zona 12, Ciudad de Guatemala', true),
('CompuElectrónica', '50255667788', 'contacto@compuelectronica.com', 'Zona 5, Ciudad de Guatemala', true);

INSERT INTO inventario (id_componente, cantidad, fecha_movimiento) VALUES
(1, 100, '2025-01-01 08:00:00'),
(2, 200, '2025-01-02 09:00:00'),
(3, 150, '2025-01-03 10:00:00'),
(4, 300, '2025-01-04 11:00:00'),
(5, 500, '2025-01-05 12:00:00'),
(6, 250, '2025-01-06 08:30:00'),
(7, 300, '2025-01-07 09:15:00'),
(8, 400, '2025-01-08 10:45:00'),
(9, 150, '2025-01-09 11:30:00'),
(10, 200, '2025-01-10 12:00:00');

INSERT INTO transaccion (id_cliente, id_vendedor, total, fecha) VALUES
(1, 1, 50.00, '2025-06-01'),
(2, 2, 75.00, '2025-06-02'),
(3, 3, 100.00, '2025-06-03'),
(4, 2, 120.00, '2025-07-05'),
(5, 3, 200.00, '2025-07-10'),
(6, 1, 300.00, '2025-07-15');

INSERT INTO detalle_transaccion (id_transaccion, id_componente, cantidad, precio, sub_total) VALUES
(1, 1, 10, 0.10, 1.00),
(1, 2, 5, 0.10, 0.50),
(2, 3, 20, 0.25, 5.00),
(4, 4, 10, 0.15, 1.50),
(4, 5, 20, 0.05, 1.00),
(5, 6, 15, 0.07, 1.05),
(5, 7, 10, 0.50, 5.00),
(6, 8, 5, 0.55, 2.75);

-- Insertar direcciones de clientes
INSERT INTO direccion_cliente (id_cliente, direccion) VALUES
(1, ROW('5a Avenida 12-34', 'Ciudad de Guatemala', '01001')),
(2, ROW('6a Calle 7-89 Zona 1', 'Ciudad de Guatemala', '01002')),
(3, ROW('Avenida Reforma 8-56', 'Ciudad de Guatemala', '01010')),
(4, ROW('Calle Martí 45-67', 'Ciudad de Guatemala', '01011')),
(5, ROW('12 Calle 3-45 Zona 10', 'Ciudad de Guatemala', '01012')),
(6, ROW('15 Avenida 12-34 Zona 5', 'Ciudad de Guatemala', '01005')),
(7, ROW('7a Calle 23-45 Zona 4', 'Ciudad de Guatemala', '01004')),
(8, ROW('8a Avenida 34-56 Zona 9', 'Ciudad de Guatemala', '01009')),
(9, ROW('9a Calle 12-34 Zona 13', 'Ciudad de Guatemala', '01013')),
(10, ROW('10 Avenida 5-67 Zona 14', 'Ciudad de Guatemala', '01014')),
(11, ROW('1a Calle 12-34 Zona 15', 'Ciudad de Guatemala', '01015')),
(12, ROW('2a Avenida 23-45 Zona 16', 'Ciudad de Guatemala', '01016')),
(13, ROW('3a Calle 34-56 Zona 17', 'Ciudad de Guatemala', '01017')),
(14, ROW('4a Avenida 45-67 Zona 18', 'Ciudad de Guatemala', '01018')),
(15, ROW('5a Calle 56-78 Zona 19', 'Ciudad de Guatemala', '01019')),
(16, ROW('6a Avenida 67-89 Zona 2', 'Ciudad de Guatemala', '01002')),
(17, ROW('7a Calle 78-90 Zona 3', 'Ciudad de Guatemala', '01003')),
(18, ROW('8a Avenida 89-01 Zona 6', 'Ciudad de Guatemala', '01006')),
(19, ROW('9a Calle 90-12 Zona 7', 'Ciudad de Guatemala', '01007')),
(20, ROW('10 Avenida 01-23 Zona 8', 'Ciudad de Guatemala', '01008')),
(21, ROW('11 Calle 12-34 Zona 11', 'Ciudad de Guatemala', '01011')),
(22, ROW('12 Avenida 23-45 Zona 12', 'Ciudad de Guatemala', '01012')),
(23, ROW('13 Calle 34-56 Zona 1', 'Ciudad de Guatemala', '01001')),
(24, ROW('14 Avenida 45-67 Zona 10', 'Ciudad de Guatemala', '01010')),
(25, ROW('15 Calle 56-78 Zona 5', 'Ciudad de Guatemala', '01005')),
(26, ROW('16 Avenida 67-89 Zona 4', 'Ciudad de Guatemala', '01004')),
(27, ROW('17 Calle 78-90 Zona 9', 'Ciudad de Guatemala', '01009')),
(28, ROW('18 Avenida 89-01 Zona 13', 'Ciudad de Guatemala', '01013')),
(29, ROW('19 Calle 90-12 Zona 14', 'Ciudad de Guatemala', '01014')),
(30, ROW('20 Avenida 01-23 Zona 15', 'Ciudad de Guatemala', '01015')),
(31, ROW('21 Calle 12-34 Zona 16', 'Ciudad de Guatemala', '01016')),
(32, ROW('22 Avenida 23-45 Zona 17', 'Ciudad de Guatemala', '01017')),
(33, ROW('23 Calle 34-56 Zona 18', 'Ciudad de Guatemala', '01018')),
(34, ROW('24 Avenida 45-67 Zona 19', 'Ciudad de Guatemala', '01019')),
(35, ROW('25 Calle 56-78 Zona 2', 'Ciudad de Guatemala', '01002')),
(36, ROW('26 Avenida 67-89 Zona 3', 'Ciudad de Guatemala', '01003')),
(37, ROW('27 Calle 78-90 Zona 6', 'Ciudad de Guatemala', '01006')),
(38, ROW('28 Avenida 89-01 Zona 7', 'Ciudad de Guatemala', '01007')),
(39, ROW('29 Calle 90-12 Zona 8', 'Ciudad de Guatemala', '01008')),
(40, ROW('30 Avenida 01-23 Zona 11', 'Ciudad de Guatemala', '01011')),
(41, ROW('31 Calle 12-34 Zona 12', 'Ciudad de Guatemala', '01012')),
(42, ROW('32 Avenida 23-45 Zona 1', 'Ciudad de Guatemala', '01001')),
(43, ROW('33 Calle 34-56 Zona 10', 'Ciudad de Guatemala', '01010')),
(44, ROW('34 Avenida 45-67 Zona 5', 'Ciudad de Guatemala', '01005')),
(45, ROW('35 Calle 56-78 Zona 4', 'Ciudad de Guatemala', '01004')),
(46, ROW('36 Avenida 67-89 Zona 9', 'Ciudad de Guatemala', '01009')),
(47, ROW('37 Calle 78-90 Zona 13', 'Ciudad de Guatemala', '01013')),
(48, ROW('38 Avenida 89-01 Zona 14', 'Ciudad de Guatemala', '01014')),
(49, ROW('39 Calle 90-12 Zona 15', 'Ciudad de Guatemala', '01015')),
(50, ROW('40 Avenida 01-23 Zona 16', 'Ciudad de Guatemala', '01016')),
(51, ROW('41 Calle 12-34 Zona 17', 'Ciudad de Guatemala', '01017')),
(52, ROW('42 Avenida 23-45 Zona 18', 'Ciudad de Guatemala', '01018')),
(53, ROW('43 Calle 34-56 Zona 19', 'Ciudad de Guatemala', '01019')),
(54, ROW('44 Avenida 45-67 Zona 2', 'Ciudad de Guatemala', '01002')),
(55, ROW('45 Calle 56-78 Zona 3', 'Ciudad de Guatemala', '01003')),
(56, ROW('46 Avenida 67-89 Zona 6', 'Ciudad de Guatemala', '01006')),
(57, ROW('47 Calle 78-90 Zona 7', 'Ciudad de Guatemala', '01007')),
(58, ROW('48 Avenida 89-01 Zona 8', 'Ciudad de Guatemala', '01008')),
(59, ROW('49 Calle 90-12 Zona 11', 'Ciudad de Guatemala', '01011')),
(60, ROW('50 Avenida 01-23 Zona 12', 'Ciudad de Guatemala', '01012')),
(61, ROW('51 Calle 12-34 Zona 1', 'Ciudad de Guatemala', '01001')),
(62, ROW('52 Avenida 23-45 Zona 10', 'Ciudad de Guatemala', '01010')),
(63, ROW('53 Calle 34-56 Zona 5', 'Ciudad de Guatemala', '01005')),
(64, ROW('54 Avenida 45-67 Zona 4', 'Ciudad de Guatemala', '01004')),
(65, ROW('55 Calle 56-78 Zona 9', 'Ciudad de Guatemala', '01009')),
(66, ROW('56 Avenida 67-89 Zona 13', 'Ciudad de Guatemala', '01013')),
(67, ROW('57 Calle 78-90 Zona 14', 'Ciudad de Guatemala', '01014')),
(68, ROW('58 Avenida 89-01 Zona 15', 'Ciudad de Guatemala', '01015')),
(69, ROW('59 Calle 90-12 Zona 17', 'Ciudad de Guatemala', '01017')),
(70, ROW('60 Avenida 01-23 Zona 18', 'Ciudad de Guatemala', '01018')),
(71, ROW('61 Calle 12-34 Zona 19', 'Ciudad de Guatemala', '01019')),
(72, ROW('62 Avenida 23-45 Zona 2', 'Ciudad de Guatemala', '01002')),
(73, ROW('63 Calle 34-56 Zona 3', 'Ciudad de Guatemala', '01003')),
(74, ROW('64 Avenida 45-67 Zona 6', 'Ciudad de Guatemala', '01006')),
(75, ROW('65 Calle 56-78 Zona 7', 'Ciudad de Guatemala', '01007')),
(76, ROW('66 Avenida 67-89 Zona 8', 'Ciudad de Guatemala', '01008')),
(77, ROW('67 Calle 78-90 Zona 11', 'Ciudad de Guatemala', '01011')),
(78, ROW('68 Avenida 89-01 Zona 12', 'Ciudad de Guatemala', '01012')),
(79, ROW('69 Calle 90-12 Zona 1', 'Ciudad de Guatemala', '01001')),
(80, ROW('70 Avenida 01-23 Zona 10', 'Ciudad de Guatemala', '01010')),
(81, ROW('71 Calle 12-34 Zona 1', 'Ciudad de Guatemala', '01001')),
(82, ROW('72 Avenida 23-45 Zona 10', 'Ciudad de Guatemala', '01010')),
(83, ROW('73 Calle 34-56 Zona 5', 'Ciudad de Guatemala', '01005')),
(84, ROW('74 Avenida 45-67 Zona 4', 'Ciudad de Guatemala', '01004')),
(85, ROW('75 Calle 56-78 Zona 9', 'Ciudad de Guatemala', '01009')),
(86, ROW('76 Avenida 67-89 Zona 13', 'Ciudad de Guatemala', '01013')),
(87, ROW('77 Calle 78-90 Zona 14', 'Ciudad de Guatemala', '01014')),
(88, ROW('78 Avenida 89-01 Zona 15', 'Ciudad de Guatemala', '01015')),
(89, ROW('79 Calle 90-12 Zona 17', 'Ciudad de Guatemala', '01017')),
(90, ROW('80 Avenida 01-23 Zona 18', 'Ciudad de Guatemala', '01018')),
(91, ROW('81 Calle 12-34 Zona 19', 'Ciudad de Guatemala', '01019')),
(92, ROW('82 Avenida 23-45 Zona 2', 'Ciudad de Guatemala', '01002')),
(93, ROW('83 Calle 34-56 Zona 3', 'Ciudad de Guatemala', '01003')),
(94, ROW('84 Avenida 45-67 Zona 6', 'Ciudad de Guatemala', '01006')),
(95, ROW('85 Calle 56-78 Zona 7', 'Ciudad de Guatemala', '01007')),
(96, ROW('86 Avenida 67-89 Zona 8', 'Ciudad de Guatemala', '01008')),
(97, ROW('87 Calle 78-90 Zona 11', 'Ciudad de Guatemala', '01011')),
(98, ROW('88 Avenida 89-01 Zona 12', 'Ciudad de Guatemala', '01012')),
(99, ROW('89 Calle 90-12 Zona 1', 'Ciudad de Guatemala', '01001')),
(100, ROW('90 Avenida 01-23 Zona 10', 'Ciudad de Guatemala', '01010'));

-- Insertar teléfonos de clientes
INSERT INTO telefono_cliente (id_cliente, telefono) VALUES
(1, '50212345678'),
(2, '50223456789'),
(3, '50234567890'),
(4, '50245678901'),
(5, '50256789012'),
(6, '50267890123'),
(7, '50278901234'),
(8, '50289012345'),
(9, '50290123456'),
(10, '50201234567'),
(11, '50212345670'),
(12, '50223456701'),
(13, '50234567012'),
(14, '50245670123'),
(15, '50256701234'),
(16, '50267012345'),
(17, '50270123456'),
(18, '50201234560'),
(19, '50212345067'),
(20, '50223450678'),
(21, '50234506789'),
(22, '50245607890'),
(23, '50256708901'),
(24, '50267809012'),
(25, '50278900123'),
(26, '50289001234'),
(27, '50290012345'),
(28, '50200123456'),
(29, '50211234567'),
(30, '50222345678'),
(31, '50233456789'),
(32, '50244567890'),
(33, '50255678901'),
(34, '50266789012'),
(35, '50277890123'),
(36, '50288901234'),
(37, '50299012345'),
(38, '50200123456'),
(39, '50211234560'),
(40, '50222345601'),
(41, '50233456012'),
(42, '50244560123'),
(43, '50255601234'),
(44, '50266012345'),
(45, '50277012345'),
(46, '50288012345'),
(47, '50299012340'),
(48, '50200123450'),
(49, '50211234056'),
(50, '50222340567'),
(51, '50233405067'),
(52, '50244506078'),
(53, '50255607089'),
(54, '50266708090'),
(55, '50277809001'),
(56, '50288900012'),
(57, '50299000023'),
(58, '50200000034'),
(59, '50211111145'),
(60, '50222222256'),
(61, '50233333367'),
(62, '50244444478'),
(63, '50255555589'),
(64, '50266666690'),
(65, '50277777701'),
(66, '50288888812'),
(67, '50299999923'),
(68, '50200000034'),
(69, '50211111145'),
(70, '50222222256'),
(71, '50233333367'),
(72, '50244444478'),
(73, '50255555589'),
(74, '50266666690'),
(75, '50277777701'),
(76, '50288888812'),
(77, '50299999923'),
(78, '50200000034'),
(79, '50211111145'),
(80, '50222222256'),
(81, '50233333367'),
(82, '50244444478'),
(83, '50255555589'),
(84, '50266666690'),
(85, '50277777701'),
(86, '50288888812'),
(87, '50299999923'),
(88, '50200000034'),
(89, '50211111145'),
(90, '50222222256'),
(91, '50233333367'),
(92, '50244444478'),
(93, '50255555589'),
(94, '50266666690'),
(95, '50277777701'),
(96, '50288888812'),
(97, '50299999923'),
(98, '50200000034'),
(99, '50211111145'),
(100, '50222222256');

-- Insertar métodos de pago
INSERT INTO metodos_pago (metodo) VALUES
('Efectivo'),
('Tarjeta de crédito'),
('Tarjeta de débito'),
('Transferencia bancaria'),
('Cheque');


DO $$
DECLARE
    component_id INT;
    random_quantity INT;
    random_date TIMESTAMP;
    max_component_id INT;
BEGIN
    -- Get the maximum id from the componentes table
    SELECT MAX(id) INTO max_component_id FROM componentes;

    FOR component_id IN 1..max_component_id LOOP
        random_quantity := 10 + floor(random() * 991)::INT;
        
        random_date := '2023-01-01'::DATE + (random() * (1825))::INT;
        random_date := random_date + (random() * 86400)::INT * INTERVAL '1 second';
        
        INSERT INTO inventario (id_componente, cantidad, fecha_movimiento)
        VALUES (component_id, random_quantity, random_date);
        
        IF random() < 0.3 THEN
            random_quantity := -1 * (1 + floor(random() * 50))::INT;
            random_date := random_date + (random() * 30)::INT * INTERVAL '1 day';
            
            INSERT INTO inventario (id_componente, cantidad, fecha_movimiento)
            VALUES (component_id, random_quantity, random_date);
            
            IF random() < 0.7 THEN
                random_quantity := abs(random_quantity) + floor(random() * 20)::INT;
                random_date := random_date + (random() * 7)::INT * INTERVAL '1 day';
                
                INSERT INTO inventario (id_componente, cantidad, fecha_movimiento)
                VALUES (component_id, random_quantity, random_date);
            END IF;
        END IF;
    END LOOP;
END $$;

DO $$
DECLARE
    random_customer INT;
    random_employee INT;
    random_date DATE;
    transaction_total NUMERIC(10,2);
    transaction_id INT;
    num_items INT;
    component_id INT;
    item_quantity INT;
    item_price NUMERIC(10,2);
    item_subtotal NUMERIC(10,2);
BEGIN
    FOR i IN 1..100 LOOP
        SELECT id INTO random_customer 
        FROM clientes 
        WHERE estado = true 
        ORDER BY random() 
        LIMIT 1;
        
        SELECT id INTO random_employee 
        FROM empleado 
        WHERE estado = true AND tipo_empleado IN ('vendedor', 'cajero')
        ORDER BY random() 
        LIMIT 1;
        
        random_date := '2023-01-01'::DATE + (random() * (1095))::INT;
        
        transaction_total := 0;
        num_items := 1 + floor(random() * 5)::INT;
        
        FOR j IN 1..num_items LOOP
            SELECT id, precio INTO component_id, item_price
            FROM componentes 
            WHERE disponible = true
            ORDER BY random() 
            LIMIT 1;
            
            item_quantity := 1 + floor(random() * 20)::INT;
            item_subtotal := item_price * item_quantity;
            transaction_total := transaction_total + item_subtotal;
        END LOOP;

        -- Ensure the total is greater than 0 before inserting
        IF transaction_total > 0 THEN
            INSERT INTO transaccion (id_cliente, id_vendedor, total, fecha)
            VALUES (random_customer, random_employee, transaction_total, random_date)
            RETURNING id INTO transaction_id;
            
            FOR j IN 1..num_items LOOP
                INSERT INTO detalle_transaccion (id_transaccion, id_componente, cantidad, precio, sub_total)
                VALUES (transaction_id, component_id, item_quantity, item_price, item_subtotal);
            END LOOP;

            INSERT INTO pagos_transacciones (id_transaccion, id_metodo_pago, monto_pagado)
            VALUES (
                transaction_id, 
                1 + floor(random() * 5)::INT,
                transaction_total
            );
        END IF;
    END LOOP;
END $$;

-- Insertar 50 compras a proveedores con datos aleatorios
DO $$
DECLARE
    random_supplier INT;
    random_date TIMESTAMP;
    purchase_total NUMERIC(10,2);
    purchase_id INT;
    num_items INT;
    component_id INT;
    item_quantity INT;
    item_price NUMERIC(10,2);
    item_subtotal NUMERIC(10,2);
BEGIN
    FOR i IN 1..50 LOOP
        -- Seleccionar proveedor aleatorio (solo activos)
        SELECT id INTO random_supplier 
        FROM proveedores 
        WHERE estado = true 
        ORDER BY random() 
        LIMIT 1;
        
        -- Generar fecha aleatoria entre 2020-01-01 y 2025-12-31
        random_date := '2020-01-01'::DATE + (random() * (2190))::INT;
        random_date := random_date + (random() * 86400)::INT * INTERVAL '1 second';
        
        -- Crear compra
        INSERT INTO compras (id_proveedor, fecha, total)
        VALUES (random_supplier, random_date, 0)
        RETURNING id INTO purchase_id;
        
        -- Reiniciar total para cálculo
        purchase_total := 0;
        
        -- Agregar 3-10 artículos a la compra
        num_items := 3 + floor(random() * 8)::INT;
        
        FOR j IN 1..num_items LOOP
            -- Seleccionar componente aleatorio
            SELECT id, precio * (0.5 + random() * 0.5) INTO component_id, item_price
            FROM componentes 
            ORDER BY random() 
            LIMIT 1;
            
            -- Cantidad aleatoria entre 10 y 500
            item_quantity := 10 + floor(random() * 491)::INT;
            
            -- Calcular subtotal (precio de compra es 50-100% del precio de venta)
            item_subtotal := item_price * item_quantity;
            
            -- Agregar a detalles de compra
            INSERT INTO detalle_compras (id_compra, id_componente, cantidad, precio_unitario, sub_total)
            VALUES (purchase_id, component_id, item_quantity, item_price, item_subtotal);
            
            -- Sumar al total
            purchase_total := purchase_total + item_subtotal;
            
            -- Agregar al inventario (con misma fecha que compra)
            INSERT INTO inventario (id_componente, cantidad, fecha_movimiento)
            VALUES (component_id, item_quantity, random_date);
        END LOOP;
        
        -- Actualizar compra con total calculado
        UPDATE compras SET total = purchase_total WHERE id = purchase_id;
    END LOOP;
END $$;

-- Insertar especificaciones de componentes para 200 componentes aleatorios
DO $$
DECLARE
    component_id INT;
    spec_name TEXT;
    spec_value TEXT;
    specs TEXT[];
    values TEXT[];
BEGIN
    -- Definir posibles especificaciones y sus posibles valores
    specs := ARRAY[
        'Voltaje máximo', 'Corriente máxima', 'Potencia', 'Tolerancia', 
        'Temperatura de operación', 'Frecuencia', 'Capacitancia', 'Resistencia',
        'Inductancia', 'Longitud de onda', 'Ángulo de visión', 'Intensidad luminosa',
        'Tiempo de respuesta', 'Consumo de energía', 'Tamaño del paquete', 'Material',
        'Peso', 'Dimensiones', 'Color', 'Fabricante'
    ];
    
    values := ARRAY[
        '5V', '12V', '24V', '50V', '100V', '250V', '500V', '1000V',
        '1A', '2A', '5A', '10A', '20A', '50A', '100A',
        '0.25W', '0.5W', '1W', '2W', '5W', '10W', '20W', '50W',
        '1%', '5%', '10%', '20%',
        '-40°C a +85°C', '-20°C a +70°C', '0°C a +50°C',
        '1Hz', '1kHz', '1MHz', '10MHz', '100MHz', '1GHz',
        '1pF', '10pF', '100pF', '1nF', '10nF', '100nF', '1μF', '10μF', '100μF', '1mF',
        '1Ω', '10Ω', '100Ω', '1kΩ', '10kΩ', '100kΩ', '1MΩ',
        '1μH', '10μH', '100μH', '1mH', '10mH', '100mH', '1H',
        '400nm', '450nm', '500nm', '550nm', '600nm', '650nm', '700nm',
        '30°', '60°', '90°', '120°', '150°', '180°',
        '100mcd', '500mcd', '1cd', '5cd', '10cd', '50cd', '100cd',
        '1ms', '5ms', '10ms', '50ms', '100ms',
        '1mW', '10mW', '100mW', '1W', '10W',
        'SMD', 'DIP', 'TO-92', 'TO-220', 'TO-247', 'SOT-23', 'SOIC', 'QFP', 'BGA',
        'Plástico', 'Cerámica', 'Metal', 'Vidrio', 'Silicio',
        '1g', '5g', '10g', '50g', '100g', '500g',
        '1x1x1mm', '2x2x2mm', '5x5x5mm', '10x10x10mm', '20x20x20mm',
        'Rojo', 'Verde', 'Azul', 'Amarillo', 'Blanco', 'Negro',
        'Texas Instruments', 'STMicroelectronics', 'ON Semiconductor', 'NXP', 'Infineon', 
        'Vishay', 'Fairchild', 'ROHM', 'Panasonic', 'Murata'
    ];
    
    -- Crear especificaciones para 200 componentes aleatorios
    FOR i IN 1..200 LOOP
        -- Seleccionar componente aleatorio
        SELECT id INTO component_id
        FROM componentes 
        ORDER BY random() 
        LIMIT 1;
        
        -- Agregar 1-5 especificaciones por componente
        FOR j IN 1..(1 + floor(random() * 5)::INT) LOOP
            -- Seleccionar nombre y valor de especificación aleatorios
            spec_name := specs[1 + floor(random() * array_length(specs, 1))::INT];
            spec_value := values[1 + floor(random() * array_length(values, 1))::INT];
            
            -- Insertar especificación
            INSERT INTO especificaciones_componente (id_componente, especificacion, valor)
            VALUES (component_id, spec_name, spec_value);
        END LOOP;
    END LOOP;
END $$;
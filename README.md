# Alky-Wallet

Proyecto de billetera digital simple desarrollado como ejercicio entregable ABP.

## Descripción

Alky-Wallet es una interfaz web estática que simula funciones básicas de una aplicación financiera:

- Página de inicio informativa.
- Formulario de login con validación básica de credenciales.
- Página de depósito con actualización de balance y confirmación de transacción.
- Página de envío de dinero con búsqueda de contacto y lista de destinatarios.
- Página de transacciones que muestra un historial simulado de movimientos.

## Estructura del proyecto

- `index.html`: página principal.
- `login.html`: inicio de sesión de usuario.
- `deposit.html`: formulario de depósito y balance.
- `send-money.html`: pantalla de envío de dinero.
- `transactions.html`: listado de transacciones.
- `assets/css/`: estilos CSS.
- `assets/js/`: scripts de la aplicación.
- `assets/img/`: imágenes utilizadas en la interfaz.

## Tecnologías

- HTML
- CSS
- JavaScript
- Bootstrap 5

## Funcionalidades

- Validación de login con credenciales predeterminadas.
- Simulación de balance inicial y actualización al depositar dinero.
- Representación de transacciones con estilos dependientes del tipo de movimiento.
- Navegación entre páginas mediante enlaces del navbar.

## Cómo usar

1. Abre `index.html` en un navegador.
2. Navega por las secciones mediante el menú superior.
3. En `login.html`, ingresa el email y contraseña:
   - Email: `user@example.com`
   - Password: `password123`
4. En `deposit.html`, ingresa un monto y confirma el depósito.
5. En `transactions.html`, revisa el historial de movimientos.

## Notas

- El proyecto es una demo estática y no tiene backend.
- Todos los datos se simulan en el frontend.
- El formulario de envio de dinero muestra contactos de ejemplo y no realiza transferencias reales.

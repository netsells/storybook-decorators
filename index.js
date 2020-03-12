const ContainerDecorator = require('./decorators/ContainerDecorator');
const HorizontallyCenteredDecorator = require('./decorators/HorizontallyCenteredDecorator');
const VerticallyCenteredDecorator = require('./decorators/VerticallyCenteredDecorator');

module.exports = {
    ContainerDecorator,
    HorizontallyCenteredDecorator,
    VerticallyCenteredDecorator,
    // Deprecated:
    CenteredDecorator: VerticallyCenteredDecorator,
};

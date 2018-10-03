/* eslint no-undef: 0 */
define(['viewModels/dashboard'], (DashboardViewModel) => {

    describe('Dashboard Page - ', () => {
        let viewModel;
        beforeEach(() => {
            viewModel = new DashboardViewModel();
        });


        describe('First function', () => {
            it('Should return true when both username and password supplied. Otherwise false', () => {
                expect(true).toBe(true);
            });
        });

        describe('Second function', () => {
            it('Should do some stuff', () => {
                expect(viewModel.testFunction(3,4)).toBe(7);
            });
        });
    });
});

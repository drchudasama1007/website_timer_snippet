from odoo import api, fields, models, _

class ResCompanyInherit(models.Model):
    _inherit = 'res.company'

    timer = fields.Date(string="Timer Date")




